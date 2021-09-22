import './Header.css'
const dayjs = require('dayjs')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(LocalizedFormat)

const Header = () => {
  return (
    <header>
      <h1>NYT NewsBlurbs</h1>
      <h2>{dayjs().format('LL')}</h2>
    </header>
  )
}

export default Header
