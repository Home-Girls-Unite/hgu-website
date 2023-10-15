import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import AboutUs from './information/AboutUs'
import Definition from './information/Definition'

const Information = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPhoto {
        nodes {
          id
          name
          slug {
            current
          }
          image {
            asset {
              id
              gatsbyImageData
              uploadId
            }
          }
        }
      }
    }
  `)

  return (
    <section className='information'>
      <AboutUs imageName='fencing' images={data.allSanityPhoto.nodes} />
      <Definition imageName='art' images={data.allSanityPhoto.nodes} />
    </section>
  )
}

export default Information
