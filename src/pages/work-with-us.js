import React from 'react'

import PageSections from '../shared/pages/PageSections'

const WorkWithUsPage = ({page}) => (
  <React.Fragment>
    <h1 className='base-heading'>{page.name}</h1>
    <PageSections sections={page.sections} className='work-with-us' />
  </React.Fragment>
)

export default WorkWithUsPage
