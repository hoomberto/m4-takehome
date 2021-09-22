import DetailedArticle from '../DetailedArticle/DetailedArticle.js'
import { Link } from 'react-router-dom'
import './Article.css'
import { formatLink } from '../../utilities/utils.js'

const Article = ({id, title, abstract, media, setArticle, byline, section }) => {

  const setCurrentArticle = () => {
    setArticle({
      title,
      media,
      abstract,
      byline
    })
  }

  return (
    <article>
      <h2>{title}</h2>
      <img
        src={media.url}
        alt={title}
      />
      <h4>#{section}</h4>
      <Link to={`/${!section ? 'top' : section }/${id}`} onClick={setCurrentArticle}><button>Read More</button></Link>
    </article>
  )
}

export default Article
