import React from 'react'

import {GatsbyImage} from 'gatsby-plugin-image'

import '../../styles/pages/brandGroup.scss'

const BrandGroup = ({images = []}) => (
  <div className='brand-group'>
    {images.map(data => <GatsbyImage className='brand' imgStyle={{objectFit: 'contain'}} key={data.id} alt={data.name} image={data.image.asset.gatsbyImageData} />)}
  </div>
)

export default BrandGroup

