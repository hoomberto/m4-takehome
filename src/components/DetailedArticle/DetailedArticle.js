import React, {useContext} from 'react'
import { useHistory, Redirect } from "react-router-dom";
import ArticleContext from '../ArticleContext/ArticleContext'
import './DetailedArticle.css'

const DetailedArticle = ({ id }) => {
  let history = useHistory();
  const value = useContext(ArticleContext)

  return (
    <section>
    {!value ? <Redirect to="/" /> : <div>
    <button onClick={() => history.goBack()}>Go Back</button>
      <img src={value.media.url} alt={value.title} />
      <h2>{value.title}</h2>
      <h3>{value.byline}</h3>
      <p>{value.abstract}</p>
      </div>
    }
    </section>
  )
}

export default DetailedArticle
