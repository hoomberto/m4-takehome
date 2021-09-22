import './ArticleOptions.css'
import { Redirect } from 'react-router-dom'
import { categories } from '../../utilities/utils'

const ArticleOptions = ({ setCategory, setSection, currentSection }) => {
  const update = (event) => {
  event.preventDefault();
  if (!event.target.value) return
  setCategory(event.target.value)
  setSection(event.target.value)
}

  const options = () => {
    return categories.map(category => <option key={category} value={category}>{category}</option>)
  }

  return (
    <div>
    <select onChange={update}>
      <option value="">Select a category</option>
      {options()}
    </select>
    {!currentSection ? <Redirect to="/" /> : <Redirect to={`/${currentSection}`} />}
    </div>
  )
}

export default ArticleOptions
