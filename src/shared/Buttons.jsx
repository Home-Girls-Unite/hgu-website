import * as React from 'react'
import classnames from 'classnames'

import {useCallback} from 'react'
import {navigate} from 'gatsby'

import '../styles/buttons/buttons.scss'

export const LinkButton = props => {
  const onClick = useCallback(event => {
    event.preventDefault()

    navigate(`/${props.path}`)
  }, [props.path])

  return (
    <button className={classnames('button link-button', props.className)} onClick={onClick}>{props.label}</button>
  )
}

export const Button = ({disabled, processing, onClick, label, className}) => (
  <button className={classnames('button basic-button', className)} disabled={disabled || processing} onClick={onClick}>{label}</button>
)
