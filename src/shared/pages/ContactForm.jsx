import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form'

import {Button} from '../Buttons'

import '../../styles/pages/contactForm.scss'

const ContactForm = () => {
  const {register, handleSubmit, formState: {errors}, watch} = useForm()

  const onSubmit = data => console.log(data)

  const onClickButton = event => {
    event.preventDefault()
  }

  return (
    <Fragment>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='first-name' className='screen-reader-only'>First Name*</label>
        <input name='first-name' className='field field-50' placeholder='First Name*' type='text' defaultValue='' required {...register('firstName', {required: true})} />
        <label htmlFor='last-name' className='screen-reader-only'>Last Name*</label>
        <input name='last-name' className='field field-50' placeholder='Last Name*' type='text' defaultValue='' required {...register('lastName', {required: true})} />
        <label htmlFor='phone' className='screen-reader-only'>Phone Number</label>
        <input name='phone' className='field' placeholder='Phone Number' type='number' defaultValue='' {...register('phone')} />
        <label htmlFor='email' className='screen-reader-only'>Email Address*</label>
        <input name='email' className='field' placeholder='Email Address*' type='email' defaultValue='' required {...register('emailRequired', {required: true})} />
        <label htmlFor='company' className='screen-reader-only'>Business/Organization name</label>
        <input name='company' className='field field-50' placeholder='Business/Organization name' type='text' defaultValue='' {...register('company')} />
        <label htmlFor='Website' className='screen-reader-only'>Website URL</label>
        <input name='Website' className='field field-50' placeholder='Website URL' type='text' {...register('website')} />
        <label htmlFor='description' className='screen-reader-only'>Tell us how we can help*</label>
        <textarea name='description' placeholder='Tell us how we can help*' required {...register('description', {required: true})} />
      </form>
      <div className='button-group'>
        <Button className='submit' label='Submit' onClick={onClickButton} />
      </div>
    </Fragment>
  )
}

export default ContactForm
