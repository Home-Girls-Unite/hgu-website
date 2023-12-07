export const activeEvent = events => events.find(event => {
  const eventDate = new Date(event.eventDate)
  const now = new Date(Date.now())

  return eventDate.getUTCFullYear() === now.getUTCFullYear() && eventDate.getUTCMonth() === now.getUTCMonth()
})

export const findBySlug = ({list, slug}) => (list.find(node => node.slug.current === slug) || {})

export const pageHasData = (data = {}, uri) => (uri === '/' || Object.keys(data).length > 0)

export const groupElements = ({elements = [], size = 3}) => elements.reduce((accumulator, item) => {
  if (accumulator.length === 0 || accumulator[accumulator.length - 1].length === size) {
    accumulator = [...accumulator, [item]]
  } else {
    const group = accumulator[accumulator.length - 1]

    accumulator[accumulator.length - 1] = [...group, item]
  }

  return accumulator
}, [])

export const randomize = (limit = 10) => (Math.random() * limit)

export const featuredPodcast = (podcasts = []) => podcasts.find(podcast => podcast.status.includes('featured')) || {}
