### Some styles are global by nature and definition. We generally don't want to add **cmz** classes everytime basic elements appear on our website. X-Team Atoms come with a base stylesheet for this.

To include the base styles on your project, add `atoms/assets/base.css`.
```
const baseCSS = require('atoms/assets/base.css')
```
**Note: ** The base stylesheet includes `normalize.css`.

Note that you still need to include the font files in your HTML's `<head>`.
```
<link href="https://fonts.googleapis.com/css?family=Open+Sans:800,800i|Source+Sans+Pro:300|Source+Code+Pro:400|Raleway:700" rel="stylesheet">
```