import * as React from 'react'
import {Link} from 'gatsby'

import '../styles/header/nav.scss'

const LINKS = [
  {
    id: '1',
    path: '/',
    label: 'Home'
  },
  {
    id: '2',
    path: 'events',
    label: 'Events'
  },
  {
    id: '3',
    path: 'services',
    label: 'Services'
  },
  {
    id: '4',
    path: 'healing-corner',
    label: 'Healing Corner'
  },
  {
    id: '5',
    path: 'press',
    label: 'Funders/Press'
  },
  {
    id: '6',
    path: 'work-with-us',
    label: 'Work With Us'
  }
]

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
