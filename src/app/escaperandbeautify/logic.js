export function beautifyHtml(html) {
    const tab = '  ';
    let result = '';
    let indent = '';
  
    html = html.replace(/>\s+</g, '><');
    html.split(/>\s*</).forEach((element) => {
      if (element.match(/^\/\w/)) indent = indent.substring(tab.length);
      result += indent + '<' + element + '>\n';
      if (element.match(/^<?\w[^>]*[^/]$/) && !element.startsWith('input')) indent += tab;
    });
  
    return result.trim();
  }
  
  export function escapeHtml(html) {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  