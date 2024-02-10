import React from 'react'

import PageUnavailable from './PageUnavailable'

const NoEvents = ({page}) => {
  const sections = page.sections || []

  return (
    <PageUnavailable
      className='no-events'
      imageUrl={page.cover?.image?.asset?.url}
      title={sections[0]?.title}
      description={sections[0]?._rawDescription}
      type='dynamic'
    />
  )
}

export default NoEvents
