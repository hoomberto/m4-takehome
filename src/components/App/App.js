import './App.css';
import React, {useState} from 'react'
// import {getStoriesByType} from '../../utilities/apiCalls.js'
import { Route, Switch, Redirect } from 'react-router-dom'
import TopArticles from '../TopArticles/TopArticles.js'
import Header from '../Header/Header.js'
import ArticleContext from '../ArticleContext/ArticleContext.js'
import DetailedArticle from '../DetailedArticle/DetailedArticle.js'

const App = () => {

  const [currentArticle, setArticle] = useState(false)
  // useEffect(() => {
  //   getStoriesByType('world')
  //   .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <Header />
      <ArticleContext.Provider value={currentArticle}>
        <Switch>
          <Route exact path="/">
            <TopArticles setArticle={setArticle} />
          </Route>
          <Route exact path="/:article" render={({ match }) => {
              const { article } = match.params
              return (
                <div>
                  {!article ? <Redirect to="/" /> : <DetailedArticle />}
                </div>
              )
            }} />
        </Switch>
      </ArticleContext.Provider>
    </div>
  )
}

export default App;
