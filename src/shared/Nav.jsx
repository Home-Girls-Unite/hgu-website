import * as React from 'react'
import {Link} from 'gatsby'

import {LINKS} from '../lib/constants'

import '../styles/header/nav.scss'

const Nav = ({links = LINKS}) => (
  <nav>
    <ul>
      {
        links.map(link => (
          <li className='link-item' key={link.id}>
            <Link activeClassName='active' className='link' to={link.path}>
              {link.label}
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default Nav
