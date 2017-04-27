### Responsive Helpers
`applyStylesUntil(styles, breakpoint)` – apply styles while viewport width is less than the breakpoint value

`applyStylesUpto(styles, breakpoint)` – apply styles while viewport width is greater than the breakpoint value

 - **styles** *(String)* – styles to apply
 - **breakpoint** *(String)* – width of the viewport in `px`.

### Visibility Helpers

 - `showUpTo(breakpoint)`
 - `showUntil(breakpoint)`
 - `hideUpTo(breakpoint)`
 - `hideUntil(breakpoint)`

### Example
```
const hideUpTo = require('atoms/styles/media-query').hideUpTo
const breakpoints = require('atoms/styles/breakpoints')

module.exports = function () {
	return `<div class="${hideUpTo(breakpoints['sm'])}">I'm only visible up to 768px!</div>`
}
```