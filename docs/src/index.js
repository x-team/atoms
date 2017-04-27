const css = require('./assets/docs.css')
require('smooth-scroll').init({ selector: 'a[href*="#"]', offset: 15 })

const highlight = function (str) {
  return marked('```\n' + str + '\n```')
}

const marked = require('marked')
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

const button = require('atoms/templates/button')
const font = require('atoms/styles/font')

const buttons = [
  button({ href: '#', anchor: 'Base'}),
  button({ href: '#', anchor: 'Red', red: true }),
  button({ href: '#', anchor: 'Dark', dark: true }),
  button({ href: '#', anchor: 'Big', big: true}),
  button({ href: '#', anchor: 'Big Red', big: true, red: true }),
  button({ href: '#', anchor: 'Big Dark', big: true, dark: true })
].join('')

const type = `
  <h1 class=${font.heading}>Heading Font</h1>
  <p class=${font.body}>Body Font</p>
  <div class=${font.action}>Action Font</div>
  <code class=${font.monospace}>Monospaced Font</code>
`

const guides = [
  {
    name: 'Introduction',
    article: marked(require('../guides/introduction.md'))
  },
  {
    name: 'Usage',
    article: marked(require('../guides/usage.md'))
  },
  {
    name: 'Base CSS',
    article: marked(require('../guides/base.md'))
  },
  {
    name: 'Markdown Theme',
    article: marked(require('../guides/markdown.md'))
  },
  {
    name: 'Breakpoints',
    article: marked(require('../guides/breakpoints.md'))
  },
  {
    name: 'Utilities',
    article: marked(require('../guides/utilities.md'))
  }
]

const domain = '//x-team.com'

const components = [
  {
    name: 'Color',
    description: 'These are the standard colors used.',
    component: require('./templates/color')(),
    code: highlight(require('./samples/color.txt'))
  },
  {
    name: 'Font',
    description: 'Common font styles',
    component: type,
    code: highlight(require('./samples/font.txt'))
  },
  {
    name: 'Grid',
    description: '12-column flex-based grid system.',
    component: require('./templates/grid')(),
    code: highlight(require('./samples/grid.txt'))
  },
  {
    name: 'Button',
    description: 'Buttons can be attached to <code>a</code> and <code>button</code> elements.',
    component: buttons,
    code: highlight(require('./samples/button.txt'))
  },
  {
    name: 'Header',
    description: 'Responsive Header',
    component: require('atoms/templates/header')({
      items: [
        {href: `${domain}/`, anchor: "Home", title: "Home"},
        {href: `${domain}/join/`, anchor: "Join X-Team", title: "Join X-Team as a Developer"},
        {href: `${domain}/our-developers/`, anchor: "Our Developers", title: "Our Developers"},
        {href: `${domain}/unleash/`, anchor: "Unleash", title: "Unleash"},
        {href: `${domain}/blog/`, anchor: "Blog", title: "X-Team's blog"},
        {href: `${domain}/portfolio/`, anchor: "Portfolio", title: "Our Work"}
      ]
    }),
    code: highlight(require('./samples/header.txt'))
  },
  {
    name: 'Form',
    description: 'Basic Form with HTML5 Constraint Validation',
    component: require('./templates/form')(),
    code: highlight(require('./samples/form.txt'))
  },
  {
    name: 'Footer',
    description: 'SEO Footer',
    component: require('atoms/templates/footer')(),
    code: highlight(require('./samples/footer.txt'))
  }
]

const html = require('./templates')({
  guides: guides,
  components: components
})

if (!module.parent) {
  if (typeof document !== 'undefined') {
    document.getElementById('root').innerHTML = html

    require('atoms/components/header')()
    require('atoms/components/form')()
  }
  else {
    console.log(html)
  }
}

if (module.hot) {
  module.hot.accept()
}

module.exports = html
