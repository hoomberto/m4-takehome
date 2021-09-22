import './Search.css'

const Search = ({ query, setQuery }) => {

  return (
    <form onSubmit={e => {
      e.preventDefault()
    }}>
      <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search for articles"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
    </form>
  )
}

export default Search
