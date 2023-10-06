import * as React from 'react'
import {Link} from 'gatsby'

import {QUICK_LINKS} from '../../lib/constants'

import '../../styles/footer/quickLinks.scss'

const QuickLinks = ({links = QUICK_LINKS}) => (
  <section className='quick-links'>
    <h1 className='heading'>Quick Links</h1>
    <ul>
      {
        links.map(link => (
          <li className='link-item' key={link.id}>
            <Link className='link' to={link.path}>
              {link.label}
            </Link>
          </li>
        ))
      }
    </ul>
  </section>
)

export default QuickLinks
