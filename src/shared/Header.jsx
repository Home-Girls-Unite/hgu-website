import * as React from 'react'

import Nav from './Nav'
import {LinkButton} from './Buttons'

import Logo from '../images/icon.png'

import '../styles/header/header.scss'

const Header = () => (
  <header>
    <img alt='home-girls-unite-logo' src={Logo} />
    <Nav />
    <LinkButton path='contact' label='Contact Us' />
  </header>
)

export default Header
