import React, {Fragment} from 'react'

import BrandsSection from '../shared/pages/BrandsSection'

const PressPage = ({page}) => (
  <Fragment>
    <h1 className='base-heading'>“100 Changemakers 2023, The Big Issue.”</h1>
    {
      page.sections?.map(section => <BrandsSection key={section.id} section={section} />)
    }
  </Fragment>
)

export default PressPage
