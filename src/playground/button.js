import React, { Component } from 'react'
import cmz from 'cmz'
import Button from '../../components/Button'

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

function getPlaceholderText () {
  return 'Lorem ipsum solor dit amet'
}

export default class PlaygroundButton extends Component {
  constructor () {
    super()

    this.state = {
      fill: true,
      label: 'Lorem Ipsum'
    }
  }

  toggle (name) {
    this.setState({
      [name]: !this.state[name]
    })
  }

  setRange (name, value) {
    let newState

    switch (name) {
      case 'label':
        newState = {
          label: getPlaceholderText().substring(0, value)
        }
        break
    }

    this.setState(newState)
  }

  render () {
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
}
