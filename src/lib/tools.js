export const activeEvent = events => events.find(event => {
  const eventDate = new Date(event.eventDate)
  const now = new Date(Date.now())

  return eventDate.getUTCMonth() === now.getUTCMonth()
})

export const findBySlug = ({list, slug}) => (list.find(node => node.slug.current === slug) || {})

export const pageHasData = (data = {}, uri) => (uri === '/' || Object.keys(data).length > 0)
