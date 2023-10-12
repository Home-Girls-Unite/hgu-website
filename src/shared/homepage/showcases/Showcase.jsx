import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'

const Showcase = ({showcase}) => (<GatsbyImage alt={showcase.slug.current} image={showcase.image.asset.gatsbyImageData} />)

export default Showcase
