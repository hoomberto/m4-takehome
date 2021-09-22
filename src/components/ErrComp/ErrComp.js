import React, { useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
const ErrComp = ({err}) => {
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.replace('/');
    }     , 3000)
  }, [])
  const renderError = () => {
    if (err === 429) return 'Too many requests! Please wait a little before making more.'
    if (err === 500) return 'Server is currently down, please try later!'
    return 'Oops! Something went wrong! Redirecting now...'
  }

  return renderError()
}

export default ErrComp
