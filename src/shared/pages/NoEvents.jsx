import React from 'react'

import {PortableText} from '@portabletext/react'

import Socials from '../Socials'

import '../../styles/pages/noEvents.scss'

const NoEvents = ({page}) => (
  <section
    className='no-events'
    style={{
      backgroundImage: `url(${page.cover.image.asset.url})`
    }}>
      <div className='description'>
        <h1>{page.sections[0].title}</h1>
        <PortableText value={page.sections[0]._rawDescription} />
        <Socials />
      </div>
  </section>
)

export default NoEvents
