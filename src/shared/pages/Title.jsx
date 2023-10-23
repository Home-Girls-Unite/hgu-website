import React, {useState, useEffect} from 'react'

import {Helmet} from 'react-helmet'
import {ORGANIZATION_NAME} from '../../lib/constants'
import {sentenceToUppercase} from '../../lib/textTools'

const Title = ({uri}) => {
  const [title, setTitle] = useState(ORGANIZATION_NAME)

  useEffect(() => {
    const pathname = uri.replace(/\//, '').replace(/-/g, ' ')
    const appName = ORGANIZATION_NAME.replace(/\s/g, '')

    setTitle(pathname ? `${sentenceToUppercase(pathname)} | ${appName}`: appName)
  }, [uri])

  return (
    <Helmet
      title={title}
      meta={[
        {name: 'description', content: `${ORGANIZATION_NAME} (HGU) is a  Community Interest Company (CIC) that provides a safe space for eldest daughters from immigrant homes.`},
        {name: 'keywords', content: 'women, daughters, eldest, support'}
      ]}
    />
  )
}

export default Title
