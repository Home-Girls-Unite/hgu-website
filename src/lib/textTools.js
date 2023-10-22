export const firstLetterUppercase = word => (word[0].toUpperCase() + word.substring(1))

export const normalizeUrl = path => {
  if (path.startsWith('/'))
    return path
  else
    return `/${path}`
}
