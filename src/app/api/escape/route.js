export async function POST(request) {
    const { html } = await request.json();
  
    const escaped = html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  
    return Response.json({ escaped: `<pre>\n${escaped}\n</pre>` });
  }
  