import * as React from 'react'

import Socials from '../Socials'

import '../../styles/footer/copyright.scss'

const Copyright = () => {
  const date = new Date(Date.now())

  return (
    <div className='copyright'>
      <span>
        © {date.getFullYear()} HGU All Rights Reserved.
      </span>
      <Socials />
    </div>
  )
}

export default Copyright
