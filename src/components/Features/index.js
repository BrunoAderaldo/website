/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Feature from './Feature'

const Features = ({ data }) => (
  <>{data && data.map(item => <Feature item={item} />)}</>
)

export default Features
