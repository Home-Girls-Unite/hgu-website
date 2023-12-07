import React, {useEffect, useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose} from '@fortawesome/free-solid-svg-icons'

import {Button} from '../Buttons'

import '../../styles/pages/bookSession.scss'

const BookSession = ({dismissDialog}) => {
  const date = new Date(Date.now())
  const overlayRef = useRef()

  useEffect(() => {
    const overlay = overlayRef.current

    if (overlay)
      overlay.addEventListener('click', dismissDialog)

    return () => {
      overlay.removeEventListener('click', dismissDialog)
    }
  }, [dismissDialog])

  return (
    <div className='book-session'>
      <div ref={overlayRef} className='overlay' />
      <div className='description'>
        <FontAwesomeIcon onClick={dismissDialog} className='closer' icon={faClose} />
        <h1 className='base-heading'>Book a rant session here</h1>
        <p>
          Being the eldest daughter comes with many feelings that we may not necessarily know how to unpack.
          Sometimes we just need someone to talk to, express ourselves and be heard.
        </p>
        <p>
          These ranting sessions are a space to speak one-to-one with fellow eldest daughter,
          free of judgement, express your feelings, get general advice or just a space to talk. 
        </p>
        <p>
          Rant sessions are available on zoom or a phone call.
          If you are outside the UK, please make sure we can contact you on WhatsApp or Facetime Audio.
        </p>
        <Button className='booking'>
          <a
            href={`https://calendly.com/homegirls/home-girls-rant?month=${date.getUTCFullYear()}-${(date.getUTCMonth() + 1)}`}
            target='_blank'
            rel='noreferrer'>
              Book Here
            </a>
        </Button>
      </div>
    </div>
  )
}

export default BookSession
