import React, {useCallback, useState} from 'react'
import classnames from 'classnames'
import {GatsbyImage} from 'gatsby-plugin-image'

const Trustee = ({trustee}) => {
  const [showNamePlate, setShowNamePlate] = useState(false)

  const onMouseEnter = useCallback(event => {
    event.preventDefault()
    setShowNamePlate(true)
  }, [])

  const onMouseLeave = useCallback(event => {
    event.preventDefault()
    setShowNamePlate(false)
  }, [])

  return (
    <div className='trustee' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={classnames('name-plate', {display: showNamePlate})}>
        <h2>{trustee.name}</h2>
        <p>{trustee.role}</p>
      </div>
      <GatsbyImage
        className={classnames('trustee-image', {zoom: showNamePlate})}
        alt={trustee.name}
        image={trustee.image.asset.gatsbyImageData} 
      />
    </div>
  )
}

export default Trustee
