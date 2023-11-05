import React from 'react'
import {Carousel} from 'react-responsive-carousel'

import BrandGroup from './BrandGroup'

import {groupElements, randomize} from '../../lib/tools'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Brands = ({images = []}) => (
  <Carousel
    className='brands'
    autoPlay
    infiniteLoop
    emulateTouch
    swipeable
    showThumbs={false}
    showArrows={false}
    showStatus={false}>
    {groupElements({elements: images}).map(group => <BrandGroup key={randomize()} images={group} />)}
  </Carousel>
)

export default Brands
