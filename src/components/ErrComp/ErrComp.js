const ErrComp = ({err}) => {

  const renderError = () => {
    if (err === 429) return 'Too many requests! Please wait a little before making more.'
    if (err === 500) return 'Server is currently down, please try later!'
  }

  return renderError()
}

export default ErrComp
