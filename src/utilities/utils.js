const formatAbstract = (abstract) => {
  let formatted = abstract;
  if (abstract.length > 90) formatted = abstract.substring(0, 90) + '...'
  return formatted
}

export const formatLink = (title) => {
  return title
  .replaceAll(' ', '-')
  .replaceAll("/’/g", '')
  .replaceAll(',', '')
  .replaceAll('.', '')
  .replaceAll('’', '')
  .replaceAll('‘', '')
}

export const categories = [
  "All",
  "Arts",
  "Automobiles",
  "Business",
  "Movies",
  "Opinion",
  "Politics",
  "Science",
  "Sports",
  "Technology",
  "Travel",
  "World"
]
