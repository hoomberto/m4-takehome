import './App.css';
import React, {useState} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import TopArticles from '../TopArticles/TopArticles.js'
import Header from '../Header/Header.js'
import ArticleContext from '../ArticleContext/ArticleContext.js'
import DetailedArticle from '../DetailedArticle/DetailedArticle.js'

const App = () => {

  const [currentArticle, setArticle] = useState(false)
  const [currentSection, setSection] = useState(false)

  return (
    <div>
      <Header />
      <ArticleContext.Provider value={currentArticle}>
        <Switch>
          <Route exact path="/">
            <TopArticles setArticle={setArticle} setSection={setSection} currentSection={currentSection} />
          </Route>
          <Route exact path="/:section" render={({ match }) => {
              const { section } = match.params;
              return <TopArticles setArticle={setArticle} setSection={setSection} currentSection={!currentSection ? section : currentSection} />
            }} />
          <Route exact path="/:section/:article" render={({ match }) => {
              const { article } = match.params;
              return <div>
                {!article ? <Redirect to="/" /> : <DetailedArticle id={article}/>}
              </div>
            }} />
        </Switch>
      </ArticleContext.Provider>
    </div>
  )
}

export default App;
