import './ArticleOptions.css'

const ArticleOptions = ({ setCategory }) => {


  const update = (event) => {
  event.preventDefault();
  if (!event.target.value) return
  setCategory(event.target.value)
}

  const options = () => {
    return [
      "Arts",
      "Automobiles",
      "Business",
      "Food",
      "Health",
      "Home",
      "Movies",
      "Opinion",
      "Politics",
      "Science",
      "Sports",
      "Technology",
      "Travel",
      "World"
    ].map(category => <option key={category} value={category}>{category}</option>)
  }

  return (
    <select onChange={update}>
      <option>Select a category</option>
      {options()}
    </select>
  )
}

export default ArticleOptions
