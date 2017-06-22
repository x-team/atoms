import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './components/Button'
import Heading from './components/Heading'
import PullQuote from './components/PullQuote'
import Section from './components/Section'

storiesOf('Button', module)
  .add('red', () => (
    <Button fill onClick={action('clicked')}>Red Button</Button>
  ))
  .add('red cta link', () => (
    <Button fill href='#' onClick={action('clicked')}>Red CTA Link</Button>
  ))
  .add('hollow', () => (
    <div style={{background: '#999', padding: '3rem'}}>
      <Button onClick={action('clicked')}>Hollow button</Button>
    </div>
  ));

storiesOf('Heading', module)
  .add('normal', () => <Heading>This is a normal heading.</Heading>)
  .add('with divider', () => <Heading divider>This heading has a divider.</Heading>)

storiesOf('Pull quote', module)
  .add('', () => <PullQuote cite='Person who said it'>Insprirational thing someone once said.</PullQuote>)

storiesOf('Section', module)
  .add(
    'Text | Image', () => (
        <Section
          heading='Section Heading.'
          pic='https://s3-us-west-2.amazonaws.com/x-team-com-static-content/prod/images/developer-2.png'>
          <p>Some nice words about this section, and some more words.</p>
          <p>More words but this time in another paragraph.</p>
        </Section>
    ))
  .add(
    'Image | Text', () => (
        <Section
          flipped
          heading='Section Heading.'
          pic='https://s3-us-west-2.amazonaws.com/x-team-com-static-content/prod/images/developer-2.png'>
          <p>Some nice words about this section, and some more words.</p>
          <p>More words but this time in another paragraph.</p>
        </Section>
    ))
