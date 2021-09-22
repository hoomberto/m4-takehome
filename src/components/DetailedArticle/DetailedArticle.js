import React, {useContext} from 'react'
import { useHistory, Redirect } from "react-router-dom";
import ArticleContext from '../ArticleContext/ArticleContext'
import './DetailedArticle.css'
const dayjs = require('dayjs')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat)

const DetailedArticle = ({ id }) => {
  let history = useHistory();
  const value = useContext(ArticleContext)

  return (
    <section>
    {!value ? <Redirect to="/" /> : <div>
    <button onClick={() => history.goBack()}>Go Back</button>
      <img src={value.media.url} alt={value.title} />
      <h2>{value.title}</h2>
      <h3>Published {dayjs(value.date).format('LL')}</h3>
      <h3>{value.byline}</h3>
      <p>{value.abstract}</p>
      <button><a href={value.url}>View Full Article</a></button>
      </div>
    }
    </section>
  )
}

export default DetailedArticle
