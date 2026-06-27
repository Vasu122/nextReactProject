"use client";
import { useState, useRef } from 'react';

export default function AspectRatioClientPage() {
  const [ratio, setRatio] = useState({ width: 16, height: 9 });
  const [dimensions, setDimensions] = useState({ width: '', height: '' });
  const [activeClass, setActiveClass] = useState(0);
  const lastChangedRef = useRef(null);

  const presets = [
    { label: 'HD Video (16:9)', width: 16, height: 9 },
    { label: 'Standard Monitor (4:3)', width: 4, height: 3 },
    { label: 'Classic Film (3:2)', width: 3, height: 2 },
    { label: 'Cinemascope (21:9)', width: 21, height: 9 },
  ];

  const calculateFromServer = async (field, value) => {
    const res = await fetch('/api/aspect-ratio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        width: field === 'width' ? value : dimensions.width,
        height: field === 'height' ? value : dimensions.height,
        lastChanged: field,
        ratio,
      }),
    });
    const data = await res.json();
    setDimensions({ width: data.width, height: data.height });
  };


  const handleRatioChange = (e, field) => {
    const value = parseFloat(e.target.value) || 0;
    setRatio(prev => ({ ...prev, [field]: value }));
  };

  const handleDimensionChange = (e, field) => {
    const value = e.target.value;
    setDimensions(prev => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field) => {
    const value = dimensions[field];
    if (value) {
      calculateFromServer(field, value);
    }
  };

  const setPresetRatio = (width, height, index) => {
    setActiveClass(index);
    setRatio({ width, height });
    setDimensions({ width: '', height: '' });
    lastChangedRef.current = null;
  };

  return (
    <>
    <div className="aspectRatio">
      <div className='aspect-Bg'>
        <h1>Aspect Ratio Calculator</h1>

        <h2>Choose device:</h2>
        <div className="preset-group">
          {presets.map((preset, index) => (
            <button
              key={index}
              onClick={() => setPresetRatio(preset.width, preset.height, index)}
              className={activeClass === index ? "active" : null}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <h2>Custom Ratio:</h2>
        <div className='preset-group-input'>
          <input
            type="number"
            value={ratio.width}
            onChange={(e) => handleRatioChange(e, 'width')}
            min="1"
            className="input-group"
          />
          <span className="colonSign">:</span>
          <input
            type="number"
            value={ratio.height}
            onChange={(e) => handleRatioChange(e, 'height')}
            min="1"
            className="input-group"
          />
        </div>

        <h2>Dimensions:</h2>
        <p>Please write the width only. will be show height according to aspect ratio</p>
        <div className='preset-group-input'>
          <div className='dimension-width'>
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) => handleDimensionChange(e, 'width')}
              onBlur={() => handleBlur('width')}
              placeholder="Width"
              min="1"
            />
            <button type='calculate' onClick={() => handleBlur('width')} title='click on button or leave mouse only'>convert</button>
          </div>
        <span className="colonSign"> × </span>
        <input
          type="number"
          value={dimensions.height}
          onChange={(e) => handleDimensionChange(e, 'height')}
          onBlur={() => handleBlur('height')}
          placeholder="Height"
          min="1"
        />

        </div>
      </div>
    </div>
    </>
  );
}



