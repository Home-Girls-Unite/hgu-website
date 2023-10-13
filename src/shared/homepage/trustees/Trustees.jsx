import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import {GatsbyImage} from 'gatsby-plugin-image'

import '../../../styles/trustees.scss'

const Trustees = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityTrustee {
        nodes {
          id
          image {
            asset {
              id
              title
              gatsbyImageData
            }
          }
          name
          role
        }
      }
    }
  `)

  return (
    <section className='trustees'>
      <p className='text'>Get Inspired</p>
      <h1 className='heading'>Team + Trustees</h1>
      <div className='image-container'>
        {
          data.allSanityTrustee.nodes.map(
            trustee => (
              <GatsbyImage
                key={trustee.id}
                className='trustee-image'
                alt={trustee.name}
                image={trustee.image.asset.gatsbyImageData} 
              />
            )
          )
        }
      </div>
    </section>
  )
}

export default Trustees
