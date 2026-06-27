export async function POST(request) {
    const { html } = await request.json();
  
    const tab = '  ';
    let result = '';
    let indent = '';
  
    const cleaned = html.replace(/>\s+</g, '><');
    cleaned.split(/>\s*</).forEach((element) => {
      if (element.match(/^\/\w/)) indent = indent.substring(tab.length);
      result += indent + '<' + element + '>\n';
      if (element.match(/^<?\w[^>]*[^/]$/) && !element.startsWith('input')) indent += tab;
    });
  
    return Response.json({ beautified: result.trim() });
  }
  