import {useState} from 'react'
import {HiMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'
import './index.css'

const Header = () => {
  const [showMenu, toggleMenu] = useState(false)

  const displayMenuItems = () => {
    toggleMenu(!showMenu)
  }
  return (
    <nav className="header-section">
      <h1 className="user-name">Ma Javeed</h1>
      <ul className="list-card">
        <a href="#homeSection">About</a>
        <a href="#projectSection">Projects</a>
        <a href="#footerSection">Contact</a>
      </ul>
      <div className="icon-container">
        {showMenu ? (
          <div className="menu-items-container">
            <MdClose size={30} onClick={displayMenuItems} />
            <a href="#homeSection">About</a>
            <a href="#projectSection">Projects</a>
            <a href="#footerSection">Contact</a>
          </div>
        ) : (
          <HiMenu onClick={displayMenuItems} size={30} />
        )}
      </div>
    </nav>
  )
}
export default Header
