export const firstLetterUppercase = word => (word[0].toUpperCase() + word.substring(1))

export const firstLetterUppercaseSentence = sentence => sentence.split(' ').reduce(
  (accumulator, word, currentIndex, words) => {
    if (currentIndex === (words.length - 1)) 
      accumulator += firstLetterUppercase(word)
    else
      accumulator += `${firstLetterUppercase(word)} `

    return accumulator
  },
  ''
)

export const normalizeUrl = path => {
  if (path.startsWith('/'))
    return path
  else
    return `/${path}`
}
