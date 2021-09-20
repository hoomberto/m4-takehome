import './App.css';
import React, {useState, useEffect} from 'react'
import {getStoriesByType} from '../../utilities/apiCalls.js'

const App = () => {

  useEffect(() => {
    getStoriesByType('world')
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      <h1>NewsReader</h1>
    </div>
  )
}

export default App;
