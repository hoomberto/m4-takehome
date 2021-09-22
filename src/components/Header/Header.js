import './Header.css'
import { Link } from 'react-router-dom'
const dayjs = require('dayjs')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat)

const Header = () => {
  return (
    <header>
      <Link to="/"><h1>NYT NewsBlurbs</h1></Link>
      <h2>{dayjs().format('LL')}</h2>
    </header>
  )
}

export default Header
