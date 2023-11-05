import React from 'react'

import Brands from './Brands'

import '../../styles/pages/brandsSection.scss'

const BrandsSection = ({section}) => (
  <section className='brands-section'>
    <h2 className='heading'>{section.title}</h2>
    <Brands images={section.images} />
  </section>
)

export default BrandsSection
