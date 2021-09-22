import React, {useState, useEffect} from 'react'
import {getStoriesByType} from '../../utilities/apiCalls.js'
import Article from '../Article/Article'
import ArticleOptions from '../ArticleOptions/ArticleOptions'
import ErrComp from '../ErrComp/ErrComp'
import Search from '../Search/Search'
import './TopArticles.css'

const TopArticles = ({ setArticle, setSection, currentSection }) => {
  const [topArticlesData, setTopArticlesData] = useState('')
  const [category, setCategory] = useState('home')
  const [err, setErr] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {

    const getData = async () => {
      try {
        let section = !currentSection ? category : currentSection
        if (section === 'All') section = 'home'
        let cats = await getStoriesByType(section)
        if (cats === 429 || cats === 404) {
          return setErr(cats)
        }
        setErr(false)
        setTopArticlesData(cats.results)
      }
      catch (error) {
        setErr(true)
      }
    }
    getData()
  }, [category, currentSection])

  // useEffect(() => {
  //   if (err) {
  //     setTimeout(() => {
  //       currentSection = false;
  //     }, 3000)
  //   }
  // }, [err])

  const renderArticles = () => {
    let allData;
    let search = query.toLowerCase()
    allData = topArticlesData
    if (query) allData = allData.filter(article => article.title.toLowerCase().includes(search) || article.section.toLowerCase().includes(search))
    let results = allData.map((article, index) => {
      return (
        <Article
          id={index+1}
          key={index}
          title={article.title}
          abstract={article.abstract}
          media={!!article.multimedia && article.multimedia[0]}
          setArticle={setArticle}
          byline={article.byline}
          section={article.section}
          date={article.published_date}
          url={article.short_url}
        />
      )
    })
    if (query && !results.length) return 'No matches for search - please try another.'
    if (query) return results
    return results.slice(0,11)
  }

  const formatCategory = () => {
    if (category === 'All' || category === 'home') return null
    return category
  }

  return (
    <section className="articles-container">
      <div>
        {(currentSection && !err)? <h1>Top {formatCategory()} Articles</h1> : <h1>Top {!err ? currentSection : null} Articles</h1>}
        <ArticleOptions setCategory={setCategory} setSection={setSection} currentSection={currentSection} />
        <Search query={query} setQuery={setQuery} />
      </div>
      {!topArticlesData && !err && <h2>Loading...</h2>}
      {!!topArticlesData && !err && renderArticles()}
      {!!err && <ErrComp err={err} />}
    </section>
  )
}

export default TopArticles
