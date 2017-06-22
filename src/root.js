import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import PullQuote from '../components/PullQuote'
import Section from '../components/Section'
import Feature from '../components/Feature'
import FeatureList from '../components/FeatureList'

import cmz from 'cmz'

const pad = cmz('padding: 2rem')

const mainColumn = cmz([
  'max-width: 70rem',
  'margin: 0 auto',
])

const heading = cmz([
  `font-family: 'Helvetica Neue', sans-serif`,
  'font-weight: 200',
])

const s = {
  wrapper: cmz(`
& {
  font-family: sans-serif;
}
`),

  main: cmz([
    'margin-top: 5rem',
    'max-width: 100%',
    'overflow: hidden'
  ]),

  family: cmz([
    mainColumn,
    'min-height: 90vh',
    'border-bottom: 1px solid hsl(0, 0%, 95%)',
  ]),

  name: cmz([
    pad,
    heading
  ]),

  item: cmz(
    pad
  )
}

s.darkItem = cmz([
  s.item,
  'background: #333',
  'color: #fff'
])

const Item = (props) => {
  return <div className={props.dark ? s.darkItem : s.item}>{props.children}</div>
}

Item.Heading = (props) => {
  return <h3 className={heading} {...props} />
}

const Family = (props) => {
  return <div className={s.family}>
    <h2 className={s.name}>{props.name}</h2>
    {props.children}
  </div>
}

function getPlaceholderText () {
  return 'Lorem ipsum solor dit amet'
}

const PlaygroundButton = React.createClass({
  displayName: 'PlaygroundButton',

  getInitialState: function () {
    return {
      fill: true,
      label: 'Lorem Ipsum'
    }
  },

  toggle: function (name) {
    this.setState({
      [name]: !this.state[name]
    })
  },

  setRange: function (name, value) {
    let newState

    switch (name) {
      case 'label':
        newState = {
          label: getPlaceholderText().substring(0, value)
        }
        break
    }

    this.setState(newState)
  },

  render: function () {
    const s = {
      root: cmz([
        'display: flex',
      ]),

      controls: cmz([
        'margin-right: 2rem'
      ]),

      preview: cmz([
        'padding: 2rem',
        'min-height: 5rem'
      ])
    }

    return <div className={s.root}>
      <form className={s.controls}>
        <div>
          <label>
            <input
              type='checkbox'
              checked={this.state.fill}
              onChange={() => this.toggle('fill')}
            />
            Fill
          </label>
        </div>

        <div>
          <div>Label length</div>
          <input
            type='range'
            value={this.state.label.length}
            min={1}
            max={getPlaceholderText().length}
            onChange={(event) => this.setRange('label', event.target.value)} />
        </div>
      </form>
      <div className={s.preview} style={{background: this.state.fill ? '#EEE' : '#999'}}>
        <Button {...this.state}>{this.state.label}</Button>
      </div>
    </div>
  }
})

const families = []

families.push({
  name: 'Buttons',
  content: <div>
    <Item dark>
      <Item.Heading>Hollow button</Item.Heading>
      <p>Transparent, so only use it on dark backgrounds for now.</p>
      <Button onClick={() => alert('clicked')}>Hollow button</Button>
    </Item>

    <Item>
      <Item.Heading>Filled button</Item.Heading>
      <p>Set the <code>fill</code> prop (boolean flag) to get a colored button.</p>
      <Button
        fill
        onClick={() => alert('clicked')}
      >Filled button</Button>
    </Item>

    <Item>
      <Item.Heading>Filled CTA link</Item.Heading>
      <p>If an <code>href</code> prop is provided we use an <code>&lt;a&gt;</code> tag instead of a <code>&lt;button&gt;</code></p>
      <Button
        fill
        href='#'
        onClick={() => alert('clicked')}
      >Filled CTA link</Button>
    </Item>

    <Item>
      <Item.Heading>Playground</Item.Heading>
      <PlaygroundButton />
    </Item>
  </div>
})

families.push({
  name: 'Headings',
  content: <div>
    <Item>
      <p>Headings should end with a full-stop.</p>
      <Heading>This is a normal heading.</Heading>
    </Item>

    <Item>
      <p>Set the <code>divider</code> prop (boolean flag) to get a divider.</p>
      <Heading divider>This heading has a divider.</Heading>
    </Item>
  </div>
})

families.push({
  name: 'Pull Quote',
  content: <div>
    <Item>
      <PullQuote cite='Person who said it'>Insprirational thing someone once said.</PullQuote>
    </Item>
  </div>
})

families.push({
  name: 'Sections',
  content: <div>
    <Item>
      <Item.Heading>Text | Pic</Item.Heading>
      <p>Default layout for a section is to have text on the left and an image on the right.</p>

      <Section
        heading='Section Heading.'
        pic='assets/deeloper-2.png'>
        <p>Some nice words about this section, and some more words.</p>
        <p>More words but this time in another paragraph.</p>
      </Section>
    </Item>

    <Item>
      <Item.Heading>Pic | Text</Item.Heading>
      <p>Set the <code>flipped</code> prop (boolean flag) to reverse the order.</p>

      <Section
        flipped
        heading='Section Heading.'
        pic='assets/developer-2.png'>
        <p>Some nice words about this section, and some more words.</p>
        <p>{`More words but this time in another paragraph, and it's got a CTA`}</p>
        <Button fill>Find out more</Button>
      </Section>
    </Item>
  </div>
})

families.push({
  name: 'Features',
  content: <div>
    <Item>
      <Item.Heading>Single feature</Item.Heading>
      <Feature
        heading='Something Cool.'
        icon='team'
        >Short description goes here</Feature>
    </Item>

    <Item>
      <Item.Heading>Group of features</Item.Heading>
      <FeatureList>
        <Feature
          heading='Feature One.'
          icon='team'
          >Short description goes here</Feature>

        <Feature
          heading='Feature Two.'
          icon='dailyUpdates'
          >Short description goes here</Feature>

        <Feature
          heading='Feature Three.'
          icon='team'
          >Short description goes here</Feature>

        <Feature
          heading='Feature Four.'
          icon='dailyUpdates'
          >Short description goes here</Feature>
      </FeatureList>
    </Item>
  </div>
})

const Nav = (props) => {
  const s = {
    root: cmz([
      'position: fixed',
      'z-index: 10',
      'width: 100%',
      'top: 0',
      'background: #fff',
      'border-bottom: 1px solid hsl(0, 0%, 95%)',
    ]),
    inner: cmz([
      mainColumn,
      'display: flex',
      'justify-content: space-between',
      'align-items: center',
      'height: 4rem',
    ]),
    logo: cmz([
      'width: 20rem',
      'padding: 0 2rem',
      `
& span {
  display: inline-block;
  width: 2rem;
  position: relative;
  top: .5rem;
  margin-right: .5rem;
}
      `
    ]),
    heading: cmz([
      'flex-grow: 1'
    ]),
    pageSelect: cmz([
      'margin: 0 1rem',
      'background: transparent',
      'border: none',
      'font-size: 1rem'
    ])
  }

  const { families } = props

  return <div className={s.root}>
    <div className={s.inner}>
      <div className={s.logo}>
        <h1 className={heading}>
          <span dangerouslySetInnerHTML={{__html: require('../atoms/logo')()}} />
          Atoms
        </h1>
      </div>
      <div className={s.heading}>{props.heading}</div>
      <select className={s.pageSelect}>
        {families.map(f => <option key={f.name}>{f.name}</option>)}
      </select>
    </div>
  </div>
}

module.exports = <div className={s.wrapper}>
  <Nav families={families} />

  <div className={s.main}>
    {families.map(f => <Family key={f.name} name={f.name}>{f.content}</Family>)}
  </div>
</div>
