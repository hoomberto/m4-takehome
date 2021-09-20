import './App.css';
// import React, {useState, useEffect} from 'react'
// import {getStoriesByType} from '../../utilities/apiCalls.js'
import TopArticles from '../TopArticles/TopArticles.js'

const App = () => {

  // useEffect(() => {
  //   getStoriesByType('world')
  //   .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <h1>NewsReader</h1>
      <TopArticles />
    </div>
  )
}

export default App;
