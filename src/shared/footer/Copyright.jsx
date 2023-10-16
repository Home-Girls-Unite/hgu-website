import * as React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import TwitterIcon from '../../images/TwitterIcon'
import TiktokIcon from '../../images/TiktokIcon'

import '../../styles/footer/copyright.scss'

const Copyright = () => {
  const date = new Date(Date.now())

  return (
    <div className='copyright'>
      <span>
        © {date.getFullYear()} HGU All Rights Reserved.
      </span>
      <div className='socials'>
        <a href='https://www.instagram.com/homegirlsunite' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='https://twitter.com/HomeGirlsUnite' target='_blank' rel='noreferrer'>
          <TwitterIcon />
        </a>
        <a href='https://www.tiktok.com/@homegirlsunite' target='_blank' rel='noreferrer'>
          <TiktokIcon />
        </a>
      </div>
    </div>
  )
}

export default Copyright
