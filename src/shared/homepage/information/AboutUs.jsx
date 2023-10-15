import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'

import {LinkButton} from '../../Buttons'

import {ORGANIZATION_NAME} from '../../../lib/constants'

import '../../../styles/aboutus.scss'

const AboutUs = ({images, imageName = ''}) => {
  const photo = images.find(data => data.slug.current === imageName) || {}

  if (photo.image) {
    return (
      <div className='about-us'>
        <GatsbyImage alt={photo.name} className='image' image={photo.image.asset.gatsbyImageData} />
        <div className='profile'>
          <h4 className='sub-heading'>About Us</h4>
          <h1 className='heading'>{ORGANIZATION_NAME.replace(/\s/g, '')}</h1>
          <p className='story'>
            {ORGANIZATION_NAME} (HGU) is a Community Interest Company that works to provides a safe space for eldest daughters and daughter from immigrant homes, both online offline.
            Home Girls is founded by eldest daughters out of frustration for the lack of support for the unique challenges we face.
            As eldest daughters ourselves, we understand how this position infiltrates every aspect of our lives and so we are in the best position to understand the support our users need.
            This is a key strength of our organisation and one we are reminded of when we receive feedback such as 'I wish I came across HGU sooner'.
            Such feedback reinforces that we are improving the lives of eldest daughters and making the right impact.
          </p>
          <div className='button-group'>
            <LinkButton className='contact-button' path='contact' label='Learn More' />
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default AboutUs
