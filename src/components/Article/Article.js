import { Link } from 'react-router-dom'
import './Article.css'

const Article = ({id, title, abstract, media, setArticle, byline, section, date, url }) => {

  const setCurrentArticle = () => {
    setArticle({
      title,
      media,
      abstract,
      byline,
      date,
      url
    })
  }

  return (
    <article>
      <h2>{title}</h2>
      <img
        src={media.url}
        alt={title}
      />
      <h3>#{section}</h3>
      <Link to={`/${!section ? 'top' : section }/${id}`} onClick={setCurrentArticle}><button>Read More</button></Link>
    </article>
  )
}

export default Article
