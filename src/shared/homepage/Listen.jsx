import React from 'react'

import {featuredPodcast} from '../../lib/tools'

import ApplePodcastsIcon from '../../images/ApplePodcastsIcon'
import spotify from '../../images/spotify.png'
import google from '../../images/google.png'

import '../../styles/pages/listen.scss'

const Listen = ({podcasts}) => {
  const podcast = featuredPodcast(podcasts)

  if (Object.keys(podcast).length) {
    return (
      <section className='listen'>
        <h1 className='base-heading'>Listen</h1>
        <div className='podcasts'>
          <div className='podcast-host'>
            <a
              className='spotify-link'
              href='https://open.spotify.com/show/2jT7tt65BP5yDs988cApNq'
              target='_blank'
              rel='noreferrer'>
              <img alt='spotify' src={spotify} />
            </a>
          </div>
          <div className='podcast-host'>
            <a
              className='apple-link'
              href='https://podcasts.apple.com/uk/podcast/home-girls-unite/id1493916414'
              target='_blank'
              rel='noreferrer'>
              <ApplePodcastsIcon />
            </a>
          </div>
          <div className='podcast-host'>
            <a
              className='google-link'
              href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMjQ4ZGQyYy9wb2RjYXN0L3Jzcw?ep=14'
              target='_blank'
              rel='noreferrer'>
              <img alt='spotify' src={google} />
            </a>
          </div>
        </div>
        <div className='spotify'>
          <iframe
            title='Listen to latest HomeGirlsUnite podcase episode'
            style={{borderRadius: '12px'}}
            src={podcast.link}
            width='100%'
            height='352'
            frameBorder='0'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            allowFullScreen
            loading='lazy'
          />
        </div>
      </section>
    )
  } else { return null }
}

export default Listen
