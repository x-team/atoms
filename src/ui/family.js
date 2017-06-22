import React from 'react'
import cmz from 'cmz'

import linkify from './linkify'
import {
  heading,
  mainColumn,
  pad
} from './index.js'

const s = {
  family: cmz([
    'min-height: 90vh',
    'margin-top: 5rem',
    'border-bottom: 1px solid hsl(0, 0%, 95%)',
  ]),

  name: cmz([
    mainColumn,
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

export const Item = (props) => {
  const cx = [
    props.dark ? s.darkItem : s.item,
    props.fullWidth ? '' : mainColumn
  ]

  return <div className={cx.join(' ')}>{props.children}</div>
}

export const ItemHeading = (props) => {
  return <h3 className={heading} {...props} />
}

export const Family = (props) => {
  return <div className={s.family}>
    <a name={linkify(props.name)} />
    <h2 className={s.name}>{props.name}</h2>
    {props.children}
  </div>
}
