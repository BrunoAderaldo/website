/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { ReactComponent as Github } from 'assets/icons/github.svg'
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg'
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg'

export default () => (
  <ul
    sx={{
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      'li:not(:last-child)': {
        mr: ['2.325rem']
      }
    }}
  >
    <li>
      <Github />
    </li>
    <li>
      <Linkedin />
    </li>
    <li>
      <Instagram />
    </li>
  </ul>
)
