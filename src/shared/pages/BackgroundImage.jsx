import React from 'react'
import classnames from 'classnames'

import '../../styles/pages/backgroundImage.scss'

const BackgroundImage = ({imageUrl, children, className}) => (
  <section
    className={classnames('background-image', className)}
    style={{backgroundImage: `url(${imageUrl})`}}>
    {children}
  </section>
)

export default BackgroundImage
