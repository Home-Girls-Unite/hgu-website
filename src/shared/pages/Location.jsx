import React from 'react'

const Location = ({address = 'Space Needle, Seattle, WA'}) => (
  <div className='location'>
    <iframe
      width="100%"
      height="450"
      style={{border: 0}}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_MAPS_API_KEY}&q=${address}`}
    />
  </div>
)

export default Location
