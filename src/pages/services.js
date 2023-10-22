import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {PortableText} from '@portabletext/react'

import '../styles/pages/services.scss'

const ServicesPage = ({pages, uri}) => {
  const data = pages.find(page => page.slug.current === uri.replace('/', '')) || {}

  return (
    <React.Fragment>
      <section className='cover'>
        <GatsbyImage alt={data.cover.name} image={data.cover.image.asset.gatsbyImageData} />
        <div className='heading'>
          <h5>We're here to help you</h5>
          <h1 className='base-heading'>Grow & stand out from the crowd</h1>
        </div>
      </section>
      <section className='contents'>
        <div className='spotlight'>
          <h1 className='base-heading'>{data.name}</h1>
          <GatsbyImage alt={data.spotlight.name} image={data.spotlight.image.asset.gatsbyImageData} />
        </div>
        <div className='sections'>
          {
            data.sections.map(section => (
              <div className='section' key={section.id}>
                <h2>{section.title}</h2>
                <PortableText value={section._rawDescription} />
              </div>
            ))
          }
        </div>
      </section>
    </React.Fragment>
  )
}

export default ServicesPage
