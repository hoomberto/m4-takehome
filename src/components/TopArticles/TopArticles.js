import React, {useState, useEffect} from 'react'
import {getStoriesByType} from '../../utilities/apiCalls.js'


const TopArticles = () => {
  const [topArticlesData, setTopArticlesData] = useState('')

  useEffect(() => {
    getStoriesByType('world')
    .then(data => setTopArticlesData(data.results))
  }, [])

  const renderArticles = () => {
    if (topArticlesData) return topArticlesData.map(article => {
      return <p>{article.title}</p>
    })
  }

  return (
    <section>
      {!!topArticlesData && renderArticles()}
    </section>
  )
}

export default TopArticles
