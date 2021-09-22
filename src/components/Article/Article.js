import './Article.css'

const Article = ({title, abstract, media}) => {

  const formatAbstract = () => {
    let formatted = abstract;
    if (abstract.length > 90) formatted = abstract.substring(0, 90) + '...'
    return formatted
  }

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
