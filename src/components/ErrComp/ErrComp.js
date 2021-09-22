import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const ErrComp = ({err}) => {
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.replace('/');
    }, 2500)
  }, [history])

  const renderError = () => {
    if (err === 429) return 'Too many requests! Please wait a little before making more.'
    if (err === 500) return 'Server is currently down, please try later!'
    if (err === 404) return 'Invalid URL! Redirecting now...'
    return 'Oops! Something went wrong! Redirecting now...'
  }

  return renderError()
}

export default ErrComp
