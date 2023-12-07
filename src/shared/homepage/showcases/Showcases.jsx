import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Carousel} from 'react-responsive-carousel'

import Showcase from './Showcase'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Showcases = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityShowcase {
        nodes {
          id
          image {
            asset {
              id
              url
              gatsbyImageData
            }
          }
          name
          slug {
            current
          }
        }
      }
    }
  `)

  if (data.allSanityShowcase?.nodes?.length) {
    return (
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        className='showcases'
        autoPlay
        animationHandler='fade'
        dynamicHeight
        emulateTouch
        infiniteLoop
        swipeable={false}>
        {
          data.allSanityShowcase.nodes.map(showcase => (<Showcase key={showcase.id} showcase={showcase} />))
        }
      </Carousel>
    )
  } else { return null }
}

export default Showcases
