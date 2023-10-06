import * as React from 'react'

import About from './About'
import QuickLinks from './QuickLinks'
import ContactInfo from './ContactInfo'
import Copyright from './Copyright'

import '../../styles/footer/footer.scss'

const Footer = () => (
  <footer className='footer'>
    <div className='details'>
      <About />
      <QuickLinks />
      <ContactInfo />
    </div>
    <Copyright />
  </footer>
)

export default Footer
