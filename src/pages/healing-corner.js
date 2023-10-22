import React from 'react'

import PageSections from '../shared/pages/PageSections'

const HealingCornerPage = ({pages, uri}) => {
  const data = pages.find(page => page.slug.current === uri.replace('/', '')) || {}

  return (
    <React.Fragment>
      <h1 className='base-heading'>{data.name}</h1>
      <PageSections sections={data.sections} />
    </React.Fragment>
  )
}

export default HealingCornerPage
