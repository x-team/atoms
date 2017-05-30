### 1. Install
```
npm install https://git@github.com/x-team/atoms.git --save
```

### 2. Import Styles
```
const button = require('atoms/styles/button')
module.exports = function () {
	return `<button class=${button.base}>This is a basic button</button>`
}
```

### 3. Combine Styles

`cmz` allows you to compose atoms, classnames and styles together:

```
const button = require('atoms/styles/button')
const cmz = require('cmz')

const atom = cmz().compose([
    button.base,
    button.red,
    `
      padding: 2rem;
    `
])

module.exports = function () {
	return `<a href="#" class="${atom}">Back to top</a>`
}
```
