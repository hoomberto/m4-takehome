const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  else {
    return response.status
  }
};

const getStoriesByType = (type) => {
  const topStories = `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=Z5V84Pf5YR3szYdJshjTNO27O0tdcJDv`
  return fetch(topStories)
  .then(checkResponse)
}

export { getStoriesByType }
