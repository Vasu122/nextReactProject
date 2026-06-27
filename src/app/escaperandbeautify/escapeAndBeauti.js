'use client';
import { useState, useRef } from 'react';
import Loading from '../feed/loading';


export default function EscapeAndBeauti() {
    console.log("Client side page");
    const [inputHtml, setInputHtml] = useState('');
    const [outputHtml, setOutputHtml] = useState('');
    const fileInputRef = useRef(null);
    const [load,setLoad]=useState(false);
  
  
    const beautifyInput = async () => {
      const res = await fetch('/api/beautify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: inputHtml }),
      });
      const data = await res.json();
      setInputHtml(data.beautified);
    };
  
    const escapeBeautified = async () => {
      setLoad(true);
      const res = await fetch('/api/escape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: inputHtml }),
      });
      const data = await res.json();
      setOutputHtml(data.escaped);
      setLoad(false);
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        setInputHtml(e.target.result);
      };
      reader.readAsText(file);
    };
  
    const copyEscaped = () => {
      navigator.clipboard.writeText(outputHtml).then(() => {
        alert('Escaped HTML copied to clipboard!');
      });
    };
  
    return (
      <>
      {
        load && <Loading />
      }
      
      <div style={{ fontFamily: 'Arial, sans-serif', background: '#f0f0f0', padding: 30, minHeight: '100vh' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>HTML Beautifier & Escaper</h2>
  
        <div style={{ maxWidth: 900, margin: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <label><strong>HTML Input:</strong></label>
          <textarea
            value={inputHtml}
            onChange={(e) => setInputHtml(e.target.value)}
            placeholder="Paste or upload your HTML here..."
            style={{
              width: '100%',
              height: 200,
              padding: 10,
              fontFamily: 'monospace',
              fontSize: 14,
              borderRadius: 6,
              border: '1px solid #ccc',
              resize: 'vertical',
            }}
          />
  
          <div style={{ display: 'flex', gap: 15, justifyContent: 'center' }}>
            <input
              type="file"
              accept=".html, .txt"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: 6 }}
            />
            <button onClick={beautifyInput} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: 6 }}>
              Beautify
            </button>
            <button onClick={escapeBeautified} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: 6 }}>
              Escape
            </button>
          </div>
  
          <label><strong>Escaped Output:</strong></label>
          <textarea
            readOnly
            value={outputHtml}
            placeholder="Escaped HTML will appear here..."
            style={{
              width: '100%',
              height: 200,
              padding: 10,
              fontFamily: 'monospace',
              fontSize: 14,
              borderRadius: 6,
              border: '1px solid #ccc',
              resize: 'vertical',
            }}
          />
          <button onClick={copyEscaped} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: 6 }}>
            Copy Escaped Output
          </button>
        </div>
      </div>
      </>
    );
  }