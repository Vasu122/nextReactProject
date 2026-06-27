export async function POST(request) {
    const { width, height, lastChanged, ratio } = await request.json();
  
    const aspectRatio = ratio.width / ratio.height;
    let result = {};
  
    if (lastChanged === 'width' && width) {
      const calculatedHeight = parseFloat(width) / aspectRatio;
      result.height = isNaN(calculatedHeight) ? '' : calculatedHeight.toFixed(0);
      result.width = width;
    } else if (lastChanged === 'height' && height) {
      const calculatedWidth = parseFloat(height) * aspectRatio;
      result.width = isNaN(calculatedWidth) ? '' : calculatedWidth.toFixed(2);
      result.height = height;
    } else {
      result = { width, height };
    }
  
    return Response.json(result);
  }
  