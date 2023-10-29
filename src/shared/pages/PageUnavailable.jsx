import React from 'react'
import classnames from 'classnames'
import {PortableText} from '@portabletext/react'

import BackgroundImage from './BackgroundImage'
import Socials from '../Socials'

import '../../styles/pages/pageUnavailable.scss'

const PageUnavailable = ({imageUrl, className, title, description, type = 'static'}) => (
  <BackgroundImage 
    imageUrl={imageUrl}
    className={classnames('page-unavailable', className)}>
      <div className='description'>
        <h1>{title}</h1>
        {
          type === 'static' ?
          <p>{description}</p> :
          <PortableText value={description} />
        }
        <Socials />
      </div>
  </BackgroundImage>
)

export default PageUnavailable
