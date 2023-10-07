import * as React from 'react'

import {useCallback} from 'react'
import {navigate} from 'gatsby'

import '../styles/buttons/buttons.scss'

export const LinkButton = props => {
  const onClick = useCallback(event => {
    event.preventDefault()

    navigate(`/${props.path}`)
  }, [props.path])

  return (
    <button className='button link-button' onClick={onClick}>{props.label}</button>
  )
}

export const Button = ({disabled, processing, onClick, label}) => (
  <button className='button basic-button' disabled={disabled || processing} onClick={onClick}>{label}</button>
)
