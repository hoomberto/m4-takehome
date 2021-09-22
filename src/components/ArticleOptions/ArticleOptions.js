import './ArticleOptions.css'
import { categories } from '../../utilities/utils'

const ArticleOptions = ({ setCategory }) => {
  const update = (event) => {
  event.preventDefault();
  if (!event.target.value) return
  setCategory(event.target.value)
}

  const options = () => {
    return categories.map(category => <option key={category} value={category}>{category}</option>)
  }

  return (
    <select onChange={update}>
      <option value="">Select a category</option>
      {options()}
    </select>
  )
}

export default ArticleOptions
