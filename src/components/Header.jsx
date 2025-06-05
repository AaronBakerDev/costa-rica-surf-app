import React from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page, e) => {
    e.preventDefault()
    setCurrentPage(page)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
          <h2>🏄‍♂️ CostaRica Surf</h2>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a 
                href="#spots" 
                className={currentPage === 'home' ? 'active' : ''}
                onClick={(e) => handleNavClick('home', e)}
              >
                Surf Spots
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={currentPage === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick('about', e)}
              >
                About Tinkso
              </a>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header