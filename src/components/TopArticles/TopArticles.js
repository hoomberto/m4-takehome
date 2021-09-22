import React, {useState, useEffect} from 'react'
import {getStoriesByType} from '../../utilities/apiCalls.js'
import Article from '../Article/Article'
import ArticleOptions from '../ArticleOptions/ArticleOptions'
import './TopArticles.css'

const TopArticles = () => {
  const [topArticlesData, setTopArticlesData] = useState('')
  const [category, setCategory] = useState('World')

  useEffect(() => {
    getStoriesByType(category)
    .then(data => setTopArticlesData(data.results.slice(0,11)))
  }, [category])

  const renderArticles = () => {
    if (topArticlesData) return topArticlesData.map((article, index) => {
      return (
        <Article
          key={index}
          title={article.title}
          abstract={article.abstract}
          media={article.multimedia[0]}
        />
      )
    })
  }

  return (
    <section className="articles-container">
      <div>
        <h1>Top Articles</h1>
        <h2>Current category: {category}</h2>
        <ArticleOptions setCategory={setCategory} />
      </div>
      {!topArticlesData ? <h2>Loading...</h2> : renderArticles()}
    </section>
  )
}

export default TopArticles
