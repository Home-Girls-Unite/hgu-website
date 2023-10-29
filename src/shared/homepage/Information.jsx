import React from 'react'

import AboutUs from './information/AboutUs'
import Definition from './information/Definition'

const Information = ({photos}) => (
  <section className='information'>
    <AboutUs imageName='fencing' images={photos} />
    <Definition imageName='art' images={photos} />
  </section>
)

export default Information
