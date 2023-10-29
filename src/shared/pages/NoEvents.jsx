import React from 'react'

import PageUnavailable from './PageUnavailable'

const NoEvents = ({page}) => (
  <PageUnavailable
    className='no-events'
    imageUrl={page.cover.image.asset.url}
    title={page.sections[0].title}
    description={page.sections[0]._rawDescription}
    type='dynamic'
  />
)

export default NoEvents
