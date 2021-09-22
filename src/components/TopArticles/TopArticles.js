import React, {useState, useEffect} from 'react'
import {getStoriesByType} from '../../utilities/apiCalls.js'
import Article from '../Article/Article'
import ArticleOptions from '../ArticleOptions/ArticleOptions'
import ErrComp from '../ErrComp/ErrComp'
import './TopArticles.css'

const TopArticles = ({ setArticle }) => {
  const [topArticlesData, setTopArticlesData] = useState('')
  const [category, setCategory] = useState('World')
  const [err, setErr] = useState(false)

  useEffect(async () => {
    try {
      let categories = await getStoriesByType(category)
      if (categories === 429) {
        return setErr(categories)
      }
      setErr(false)
      setTopArticlesData(categories.results.slice(0,11))
    }
    catch (error) {
      console.log(error)
      setErr(error)
    }
  }, [category])

  const renderArticles = () => {
    if (topArticlesData) return topArticlesData.map((article, index) => {
      return (
        <Article
          key={index}
          title={article.title}
          abstract={article.abstract}
          media={article.multimedia[0]}
          setArticle={setArticle}
          byline={article.byline}
        />
      )
    })
  }

  return (
    <section className="articles-container">
      <div>
        <h1>Top {category} Articles</h1>
        <ArticleOptions setCategory={setCategory} />
      </div>
      {!topArticlesData && !err && <h2>Loading...</h2>}
      {!!topArticlesData && !err && renderArticles()}
      {!!err && <ErrComp err={err} />}
    </section>
  )
}

export default TopArticles
