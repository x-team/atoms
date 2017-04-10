const css = require('./assets/base.css')

const components = [
  {
    name: 'Colors',
    description: 'These are the standard colors used.',
    component: require('./templates/ui-library/color.js')()
  },
  {
    name: 'Button',
    description: 'Buttons can be attached to `a` and `button` elements.',
    component: require('./templates/button')()
  },
  {
    name: 'Grid',
    description: 'Flex-based grid system',
    component: require('./templates/grid')()
  },
  {
    name: 'Footer',
    description: 'SEO Footer',
    component: require('./templates/footer')()
  }
]

const html = require('./templates/ui-library')({
  components: components
})

if (!module.parent) {
  if (typeof document !== 'undefined') {
    document.getElementById('root').innerHTML = html
  }
  else {
    console.log(html)
  }
}

if (module.hot) {
  module.hot.accept()
}

module.exports = html
