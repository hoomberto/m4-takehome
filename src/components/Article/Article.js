import DetailedArticle from '../DetailedArticle/DetailedArticle.js'
import { Link } from 'react-router-dom'
import './Article.css'

const Article = ({title, abstract, media, setArticle, uri, byline}) => {

  const articleLink = () => {
    return title.replace(' ', '-')
  }

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
      <Link to={articleLink()} onClick={setCurrentArticle}><button>Read More</button></Link>
    </article>
  )
}

export default Article
