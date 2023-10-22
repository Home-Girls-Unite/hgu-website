import React from 'react'

import PageSections from '../shared/pages/PageSections'

const WorkWithUsPage = ({pages, uri}) => {
  const data = pages.find(page => page.slug.current === uri.replace('/', '')) || {}

  return (
    <React.Fragment>
      <h1 className='base-heading'>{data.name}</h1>
      <PageSections sections={data.sections} className='work-with-us' />
    </React.Fragment>
  )
}

export default WorkWithUsPage
