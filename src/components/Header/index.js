import {HiMenu} from 'react-icons/hi'
import './index.css'

const Header = () => (
  <nav className="header-section">
    <h1 className="user-name">Ma Javeed</h1>
    <ul className="list-card">
      <a href="#homeSection">About</a>
      <a href="#projectSection">Projects</a>
      <a href="#footerSection">Contact</a>
    </ul>
    <div className="icon-container">
      <HiMenu size={30} />
    </div>
  </nav>
)
export default Header
