import './Article.css'

const Article = ({title, abstract, media}) => {

  const formatAbstract = () => {
    let formatted = abstract;
    if (abstract.length > 90) formatted = abstract.substring(0, 90) + '...'
    return formatted
  }

  // return (
  //   <article>
  //     <h3>{title}</h3>
  //     <div className="img-abstract-container">
  //     <div className="img-container">
  //       <img
  //         src={media.url}
  //       />
  //     </div>
  //       <p>{formatAbstract()}</p>
  //     </div>
  //   </article>
  // )
  return (
    <article>
      <h2>{title}</h2>
      <img
        src={media.url}
        alt={title}
      />
      <button>Learn More</button>
    </article>
  )
}

export default Article
