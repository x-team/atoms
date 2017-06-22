import React from 'react'
import cmz from 'cmz'

export const pad = cmz('padding: 2rem')

export const mainColumn = cmz([
  'max-width: 70rem',
  'margin: 0 auto',
])

export const heading = cmz([
  `font-family: 'Helvetica Neue', sans-serif`,
  'font-weight: 200',
])

export const main = cmz([
  'margin-top: 5rem',
  'max-width: 100%',
  'overflow: hidden'
])

const s = {
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

export const Item = (props) => {
  return <div className={props.dark ? s.darkItem : s.item}>{props.children}</div>
}

Item.Heading = (props) => {
  return <h3 className={heading} {...props} />
}

export const Family = (props) => {
  return <div className={s.family}>
    <h2 className={s.name}>{props.name}</h2>
    {props.children}
  </div>
}
