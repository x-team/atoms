const cmz = require('cmz')
const fs = require('fs')
const path = require('path')
const ReactServer = require('react-dom/server')

// ssr the frontend
const Root = require('./root')
const content = ReactServer.renderToString(Root)

const sheets = cmz.sheets
const css = Object.keys(sheets).map((id) => sheets[id]).join('\n')

// switch this to false if you want css in a separate file
const inlineCss = true

const dir = path.join(__dirname, '..', 'dist')
const cssFilename = 'bundle.css'

if (!inlineCss) {
  fs.writeFileSync(path.join(dir, cssFilename), css)
}

const cssTag = inlineCss
  ? `<style>${css}</style>`
  : `<link href="./${cssFilename}" rel="stylesheet" type="text/css" />`

const theme = cmz(`
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

code {
  background: #EEE;
  color: #C63;
  border-radius: 3px;
  padding: 3px 4px;
}
`)

const tpl = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>X-Team Atoms</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>${theme.getCss()}</style>
    ${cssTag}
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="./vendor.js"></script>
    <script src="./index.js"></script>

    <script>
      WebFontConfig = {
        google: {
          families: ['Open Sans:300,600,800,800i', 'Source Sans Pro:300,400,700', 'Montserrat:400,700,700i,900', 'Oswald:300']
        }
      };

      (function(d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
        s.parentNode.insertBefore(wf, s);
      })(document);
    </script>
  </body>
</html>`

fs.writeFileSync(path.join(dir, 'index.html'), tpl)
console.log('ok')
