import React, {useState, useEffect} from 'react'
import {getStoriesByType} from '../../utilities/apiCalls.js'
import Article from '../Article/Article'
import './TopArticles.css'

const TopArticles = () => {
  const [topArticlesData, setTopArticlesData] = useState('')

  useEffect(() => {
    getStoriesByType('world')
    .then(data => setTopArticlesData(data.results))
  }, [])

  const renderArticles = () => {
    if (topArticlesData) return topArticlesData.map((article, index) => {
      return <Article
              key={index}
              title={article.title}
              abstract={article.abstract}
              media={article.multimedia[0]} />
    })
  }

  return (
    <section className="articles-container">
      {!!topArticlesData && renderArticles()}
    </section>
  )
}

export default TopArticles
