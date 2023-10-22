import React from 'react'
import {Carousel} from 'react-responsive-carousel'

import Slashes from '../images/Slashes'
import {ANSWERS} from '../lib/constants'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/mission.scss'

const Mission = () => (
  <section className='mission'>
    <div className='question'>
      <h1>
        Why Do We Support The Eldest Daughter?
      </h1>

    </div>
    <div className='section'>
      <Slashes />
      <Carousel
        autoPlay
        className='answers'
        emulateTouch
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}>
        {
          ANSWERS.map(answer => (<p key={answer.id} className='answer'>{answer.value}</p>))
        }
      </Carousel>
    </div>
  </section>
)

export default Mission
