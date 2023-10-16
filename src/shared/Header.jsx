import * as React from 'react'
import {Link} from 'gatsby'

import MobileNav from './MobileNav'
import Nav from './Nav'
import {LinkButton} from './Buttons'

import Logo from '../images/icon.png'

import '../styles/header/header.scss'

const Header = () => (
  <header className='header'>
    <Link to='/'><img className='logo' alt='home-girls-unite-logo' src={Logo} /></Link>
    <MobileNav />
    <Nav />
    <LinkButton path='contact' label='Contact Us' />
  </header>
)

export default Header
