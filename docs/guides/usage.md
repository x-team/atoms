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
Use **cmz** atoms' `toString()` method to get the class name and combine it with other classes. We recommend using the `classnames` package.
This is commonly use when combining styles on the template level.
```
const button = require('atoms/styles/button')
const cx = require('classnames')
const classNames = cx(button.base.toString(), button.red.toString(), button.big.toString())

module.exports = function () {
	return `<a href="#" class="${classNames}">Back to top</a>`
}
```

### 4. Compose Styles
Use **cmz** atoms' `compose()` method to combine atoms upon style definition.
To illustrate the difference between using the `classnames` package and `compose()`:
```
const cmz = require('cmz')
const cx = require('classnames')
const font = require('atoms/styles/font')

const blackBorder = cmz('border: black solid 1px;')

const borderedHeading = `<div class="${cx(blackBorder.toString(), font.heading.toString())}">Hello</div>`
// returns a bordered block with the heading font

const bordered = `<div class="${blackBorder}">Hello</div>`
// returns a bordered block with the default font

blackBorder.compose([font.action])
// alters blackBorder. compose() doesn't mutate the atom but rather just appends the CSS class of font.action

const borderedHeadingToo = `<div class="${blackBorder}">Hello</div>`
// returns a bordered block with the heading font
```

### 5. Use Templates
```
const Button = require('atoms/templates/button')
module.exports = function () {
	return Button({ href: '#', anchor: 'Back to top', big: true, red: true })
}
```