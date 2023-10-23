import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {PortableText} from '@portabletext/react'

import '../../styles/pages/event.scss'

const Event = ({event}) => (
  <section className='event'>
    <h1 className='base-heading'>{event.title}</h1>
    <div className='event-heading'>
      <GatsbyImage className='event-image' alt={event.cover.name} image={event.cover.image.asset.gatsbyImageData} />
      <div className='text'>
        <h2>{event.sections[0].title}</h2>
        <PortableText value={event.sections[0]._rawDescription} />
      </div>
    </div>
    <div className='sections'>
      {
        event.sections.slice(1).map(section => (
          <div className='section description' key={section.id}>
            <h2>{section.title}</h2>
            <PortableText value={section._rawDescription} />
          </div>
        ))
      }
    </div>
  </section>
)

export default Event
