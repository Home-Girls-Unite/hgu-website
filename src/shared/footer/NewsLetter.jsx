import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import {Button} from '../Buttons'

import '../../styles/footer/newsletter.scss'

const EMAIL_REGEX = /^\S+@\S+\.\S+$/g

const Newsletter = () => {
  const {register, handleSubmit, formState: {errors}, watch, setValue} = useForm()
  const [subscribing, setSubscribing] = useState(false)
  const email = watch('email')

  const sentToMailchimp = React.useCallback(email => {
    setSubscribing(true)

    addToMailchimp(email).then(() => {
      setValue('email', '')
      setSubscribing(false)
    })
  }, [setValue])

  const onSubmit = data => sentToMailchimp(data.email)

  const onClickButton = React.useCallback(event => {
    event.preventDefault()

    if (EMAIL_REGEX.test(email))
      sentToMailchimp(email)
  }, [email, sentToMailchimp])

  return (
    <section className='newsletter'>
      <h1 className='heading'>Join Our Newsletter</h1>
      <div className='description'>Sign up for our newsletter to enjoy free tips and tricks!</div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='screen-reader-only' htmlFor='email'>Email Address</label>
        <input
          placeholder='Email Address'
          name='email'
          type='email'
          required
          defaultValue=''
          {...register('email', {required: true, pattern: EMAIL_REGEX})}
        />
      </form>
      <Button disabled={!!errors.email || subscribing} onClick={onClickButton} label='Sign Me Up' />
    </section>
  )
}

export default Newsletter
