import React from 'react'

import {LinkButton} from './Buttons'

import {ORGANIZATION_NAME} from '../lib/constants'

import '../styles/letstalk.scss'

const LetsTalk = () => (
  <section className='lets-talk'>
    <p className='text'>Let's Talk</p>
    <h1 className='heading'>{ORGANIZATION_NAME}</h1>
    <p className='additional-text'>Helping eldest daughters thrive</p>
    <LinkButton className='lets-talk-button' label='Contact Us' />
  </section>
)

export default LetsTalk
