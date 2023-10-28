import React from 'react'

import {PortableText} from '@portabletext/react'

import BackgroundImage from './BackgroundImage'
import Socials from '../Socials'

import '../../styles/pages/noEvents.scss'

const NoEvents = ({page}) => (
  <BackgroundImage className='no-events' imageUrl={page.cover.image.asset.url}>
    <div className='description'>
      <h1>{page.sections[0].title}</h1>
      <PortableText value={page.sections[0]._rawDescription} />
      <Socials />
    </div>
  </BackgroundImage>
)

export default NoEvents
