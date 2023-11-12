import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'

const Trustee = ({trustee}) => (
  <div className='trustee'>
    <div className='name-plate'>
      <h2>{trustee.name}</h2>
      <p>{trustee.role}</p>
    </div>
    <GatsbyImage
      className='trustee-image'
      alt={trustee.name}
      image={trustee.image.asset.gatsbyImageData} 
    />
  </div>
)

export default Trustee
