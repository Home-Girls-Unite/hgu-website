import React from 'react'

import PageSections from '../shared/pages/PageSections'

const HealingCornerPage = ({page}) => (
  <React.Fragment>
    <h1 className='base-heading'>{page.name}</h1>
    <PageSections sections={page.sections} />
  </React.Fragment>
)

export default HealingCornerPage
