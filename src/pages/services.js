import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {PortableText} from '@portabletext/react'

import '../styles/pages/services.scss'

const ServicesPage = ({page}) => (
  <React.Fragment>
    <section className='cover'>
      <GatsbyImage alt={page.cover?.name} image={page.cover?.image?.asset?.gatsbyImageData} />
      <div className='heading'>
        <h5>We're here to help you</h5>
        <h1 className='base-heading'>Grow & stand out from the crowd</h1>
      </div>
    </section>
    <section className='contents'>
      <div className='spotlight'>
        <h1 className='base-heading'>{page.name}</h1>
        <GatsbyImage alt={page.spotlight?.name} image={page.spotlight?.image?.asset?.gatsbyImageData} />
      </div>
      <div className='sections'>
        {
          page.sections?.map(section => (
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

export default ServicesPage
