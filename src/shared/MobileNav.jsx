import React, {useCallback, useState} from 'react'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faClose} from '@fortawesome/free-solid-svg-icons'

import {Button} from './Buttons'
import {LINKS} from '../lib/constants'

import '../styles/header/mobileNav.scss'

const MobileNav = ({links = LINKS}) => {
  const [showNav, setShowNav] = useState(false)

  const onClick = useCallback(() => {
    if (showNav)
      setShowNav(false)
    else
      setShowNav(true)
  }, [showNav])

  return (
    <div className='mobile-nav'>
      <nav>
        <Button className='mobile-button' onClick={onClick}>
          <FontAwesomeIcon icon={showNav ? faClose : faBars} />
        </Button>
        {
          showNav && (
            <ul>
              {
                links.map(link => (
                  <li className='mobile-link-item' key={link.id}>
                    <Link activeClassName='active' className='mobile-link' to={link.path}>
                      {link.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          )
        }
      </nav>
    </div>
  )
}

export default MobileNav
