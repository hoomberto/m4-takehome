import './Article.css'

const Article = ({title, abstract, media}) => {

  return (
    <article>
      <h2>{title}</h2>
      <img
        src={media.url}
        alt={title}
      />
      <button>Read More</button>
    </article>
  )
}

export default Article
