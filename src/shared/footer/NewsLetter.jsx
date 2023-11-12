import * as React from 'react'
import {useForm} from 'react-hook-form'

import {Button} from '../Buttons'

import '../../styles/footer/newsletter.scss'

const Newsletter = () => {
  const {register, handleSubmit, formState: {errors}, watch} = useForm()
  const email = watch('emailRequired')

  const onSubmit = data => console.log(data)

  const onClickButton = React.useCallback(event => {
    event.preventDefault()

    console.log({email})
  }, [email])

  return (
    <section className='newsletter'>
      <h1 className='heading'>Join Our Newsletter</h1>
      <div className='description'>Sign up for our newsletter to enjoy free tips and tricks!</div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='screen-reader-only' htmlFor='email'>Email Address</label>
        <input placeholder='Email Address' name='email' type='email' required defaultValue='' {...register('emailRequired', {required: true})} />
      </form>
      <Button disabled={!!errors.emailRequired} onClick={onClickButton} label='Sign Me Up' />
    </section>
  )
}

export default Newsletter
