export const activeEvent = events => events.find(event => {
  const eventDate = new Date(event.eventDate)
  const now = new Date(Date.now())

  return eventDate.getUTCMonth() === now.getUTCMonth()
})