import DetailedArticle from '../DetailedArticle/DetailedArticle.js'
import { Link } from 'react-router-dom'
import './Article.css'
import { formatLink } from '../../utilities/utils.js'

const Article = ({title, abstract, media, setArticle, uri, byline}) => {

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
      <Link to={formatLink(title)} onClick={setCurrentArticle}><button>Read More</button></Link>
    </article>
  )
}

export default Article
