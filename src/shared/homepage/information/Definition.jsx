import React from 'react'

import {GatsbyImage} from 'gatsby-plugin-image'

import {LinkButton} from '../../Buttons'

import '../../../styles/definition.scss'

const Definition = ({imageName = '', images}) => {
  const photo = images.find(data => data.slug.current === imageName) || {}

  if (photo.image) {
    return (
      <div className='definition'>
        <div className='details'>
          <h4 className='sub-heading'>Definition Of</h4>
          <h1 className='heading'>Eldest Daughter</h1>
          <p className='eldest-daughter'>
            The eldest daughter refers to the first-born daughter within the household.
            However, there are some instances where other birth orders within the family inherit the role.
            For example, the role may get passed to the middle or youngest daughter due to the following,
            this definition has been gathered from my experience in the organisation,
            and through conversations with other daughters who may not fit in the conventional definition of what the eldest daughter should be.
          </p>
          <ol className='examples'>
            <li>The firstborn daughter has left the household</li>
            <li>The firstborn daughter rejected the role</li>
            <li>All daughters have been parentified</li>
          </ol>
          <div className='button-group fade-in-group'>
            <LinkButton className='events-button' path='events' label='Events' />
          </div>
        </div>
        <GatsbyImage alt={photo.name} className='image' image={photo.image.asset.gatsbyImageData} />
      </div>
    )
  } else {
    return null
  }
}

export default Definition
