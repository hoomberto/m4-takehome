import './ArticleOptions.css'

const ArticleOptions = ({ setOption }) => {

  const options = () => {
    return [
      "arts",
      "automobiles",
      "books",
      "business",
      "fashion",
      "food",
      "health",
      "home",
      "movies",
      "opinion",
      "politics",
      "realestate",
      "science",
      "sports",
      "technology",
      "travel",
      "upshot",
      "us",
      "world"
    ].map(category => <option key={category}>{category}</option>)
  }

  return (
    <select>
      {options()}
    </select>
  )
}

export default ArticleOptions
