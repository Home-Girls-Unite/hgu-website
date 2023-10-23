import React from 'react'

import NoEvents from '../shared/pages/NoEvents'
import Event from '../shared/pages/Event'

import {activeEvent} from '../lib/tools'

const EventsPage = ({page, events}) => {
  const event = activeEvent(events)

  return (
    <React.Fragment>
      {
        event ?
        <Event events={events} event={event} /> :
        <NoEvents page={page} />
      }
    </React.Fragment>
  )
}

export default EventsPage
