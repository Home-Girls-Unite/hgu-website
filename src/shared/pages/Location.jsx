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
      src={`https://maps.google.com/maps?q=${address}&t=m&z=15&output=embed&iwloc=near`}
    />
  </div>
)

export default Location
