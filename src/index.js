const css = require('./assets/base.css')
const button = require('./templates/button')
const fonts = require('./styles/fonts')

const buttons = [
  button({ href: '#', anchor: 'Base'}),
  button({ href: '#', anchor: 'Red', red: true }),
  button({ href: '#', anchor: 'Dark', dark: true }),
  button({ href: '#', anchor: 'Big', big: true}),
  button({ href: '#', anchor: 'Big Red', big: true, red: true }),
  button({ href: '#', anchor: 'Big Dark', big: true, dark: true })
].join('')

const type = `
  <h1 class=${fonts.heading}>Heading Font</h1>
  <p class=${fonts.body}>Body Font</p>
  <div class=${fonts.action}>Action Font</div>
  <code class=${fonts.monospace}>Monospaced Font</code>
`

const components = [
  {
    name: 'Colors',
    description: 'These are the standard colors used.',
    component: require('./templates/ui-library/color.js')()
  },
  {
    name: 'Fonts',
    description: 'Common font styles',
    component: type
  },
  {
    name: 'Button',
    description: 'Buttons can be attached to `a` and `button` elements.',
    component:buttons
  },
  {
    name: 'Grid',
    description: 'Flex-based grid system',
    component: require('./templates/grid')()
  },
  {
    name: 'Header',
    description: 'Responsive Header',
    component: require('./templates/header')({
      items: [
        {href: "/", anchor: "Home", title: "Home", currentPage: true},
        {href: "/join/", anchor: "Join X-Team", title: "Join X-Team as a Developer"},
        {href: "/our-developers/", anchor: "Our Developers", title: "Our Developers"},
        {href: "/unleash/", anchor: "Unleash", title: "Unleash"},
        {href: "/blog/", anchor: "Blog", title: "X-Team's blog"},
        {href: "/portfolio/", anchor: "Portfolio", title: "Our Work"}
      ]
    })
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
