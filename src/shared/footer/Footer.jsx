import * as React from 'react'

import About from './About'
import ContactInfo from './ContactInfo'
import Copyright from './Copyright'
import NewsLetter from './NewsLetter'
import QuickLinks from './QuickLinks'

import '../../styles/footer/footer.scss'

const Footer = () => (
  <footer className='footer'>
    <div className='details'>
      <About />
      <QuickLinks />
      <ContactInfo />
      <NewsLetter />
    </div>
    <Copyright />
  </footer>
)

export default Footer
