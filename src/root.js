import React from 'react'

// ui
import Nav from './ui/nav'
import {
  Family,
  Item,
  ItemHeading
 } from './ui/family'
import * as ui from './ui'

// components
import Button from '../components/Button'
import Heading from '../components/Heading'
import PullQuote from '../components/PullQuote'
import Section from '../components/Section'
import Feature from '../components/Feature'
import FeatureList from '../components/FeatureList'

// playgrounds
import PlaygroundButton from './playground/button'

const families = []

families.push({
  name: 'Buttons',
  content: <div>
    <Item dark>
      <ItemHeading>Hollow button</ItemHeading>
      <p>Transparent, so only use it on dark backgrounds for now.</p>
      <Button onClick={() => alert('clicked')}>Hollow button</Button>
    </Item>

    <Item>
      <ItemHeading>Filled button</ItemHeading>
      <p>Set the <code>fill</code> prop (boolean flag) to get a colored button.</p>
      <Button
        fill
        onClick={() => alert('clicked')}
      >Filled button</Button>
    </Item>

    <Item>
      <ItemHeading>Filled CTA link</ItemHeading>
      <p>If an <code>href</code> prop is provided we use an <code>&lt;a&gt;</code> tag instead of a <code>&lt;button&gt;</code></p>
      <Button
        fill
        href='#'
        onClick={() => alert('clicked')}
      >Filled CTA link</Button>
    </Item>

    <Item>
      <ItemHeading>Playground</ItemHeading>
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
    <Item fullWidth>
      <div className={ui.mainColumn}>
        <ItemHeading>Text | Pic</ItemHeading>
        <p>Default layout for a section is to have text on the left and an image on the right.</p>
      </div>

      <Section
        heading='Section Heading.'
        pic='assets/developer-2.png'>
        <p>Some nice words about this section, and some more words.</p>
        <p>More words but this time in another paragraph.</p>
      </Section>
    </Item>

    <Item fullWidth>
      <div className={ui.mainColumn}>
        <ItemHeading>Pic | Text</ItemHeading>
        <p>Set the <code>flipped</code> prop (boolean flag) to reverse the order.</p>
      </div>

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
      <ItemHeading>Single feature</ItemHeading>
      <Feature
        heading='Something Cool.'
        icon='team'
        >Short description goes here</Feature>
    </Item>

    <Item>
      <ItemHeading>Group of features</ItemHeading>
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

module.exports = <div>
  <Nav families={families} />

  <div className={ui.main}>
    {families.map(f => <Family key={f.name} name={f.name}>{f.content}</Family>)}
  </div>
</div>
