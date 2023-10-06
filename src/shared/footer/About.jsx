import * as React from 'react'

import Logo from '../../images/icon.png'

import '../../styles/footer/about.scss'

const About = () => (
  <section className='about'>
    <img className='logo' alt='home-girls-unite-logo' src={Logo} />
    <div className='description'>
      Home Girls Unite (HGU) is a  Community Interest Company (CIC) that provides a safe space for eldest daughters from immigrant homes.
      It is founded by eldest daughters out of frustration with the lack of support for our unique challenges.
    </div>
  </section>
)

export default About
