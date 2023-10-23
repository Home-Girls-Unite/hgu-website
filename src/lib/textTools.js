export const firstLetterUppercase = word => (word[0].toUpperCase() + word.substring(1))

export const sentenceToUppercase = sentence => {
  const words = sentence.split(' ')

  return words.reduce((accumulator, word) => {
    accumulator = [...accumulator, firstLetterUppercase(word)]

    return accumulator
  }, []).join(' ')
}

export const normalizeUrl = path => {
  if (path.startsWith('/'))
    return path
  else
    return `/${path}`
}
