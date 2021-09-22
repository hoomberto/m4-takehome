import './App.css';
// import React, {useState, useEffect} from 'react'
// import {getStoriesByType} from '../../utilities/apiCalls.js'
import TopArticles from '../TopArticles/TopArticles.js'
import Header from '../Header/Header.js'

const App = () => {

  // useEffect(() => {
  //   getStoriesByType('world')
  //   .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <Header />
      <TopArticles />
    </div>
  )
}

export default App;
