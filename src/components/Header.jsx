import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>🏄‍♂️ CostaRica Surf</h2>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#spots">Surf Spots</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header