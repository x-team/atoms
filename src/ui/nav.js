import React from 'react'
import cmz from 'cmz'

import linkify from './linkify'
import logo from '../../atoms/logo'

import {
  heading,
  mainColumn
} from './index.js'

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

function navTo (name) {
  location.hash = linkify(name)
}

export default (props) => {
  const { families } = props

  return <div className={s.root}>
    <div className={s.inner}>
      <div className={s.logo}>
        <h1 className={heading}>
          <span dangerouslySetInnerHTML={{__html: logo()}} />
          Atoms
        </h1>
      </div>
      <div className={s.heading}>{props.heading}</div>
      <select className={s.pageSelect} onChange={(event) => navTo(event.target.value)}>
        {families.map(f => <option key={f.name}>{f.name}</option>)}
      </select>
    </div>
  </div>
}
