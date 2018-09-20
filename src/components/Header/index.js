import React, { Component } from 'react'
import Link from 'gatsby-link'

import NipponLogo from '../../assets/img/ryosuke-hiragana.svg'

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <Link to={'/'} className="logo">
          <svg width="140px" height="67px" viewBox="0 0 140 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">  
          <image id="image0" width="140px" height="67px" x="0" y="0"
            href="data:image/png;base64,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
              OjAwL0x1yQAAAABJRU5ErkJggg==" />
        </svg>
        </Link>
      <nav className="Navigation">
        <ul>
          <li>
            <Link to={'/blog'}>Mi Blog</Link>
          </li>
          <li>
            <Link to={'/projects'}>Proyectos</Link>
          </li>
          <li>
            <Link to={'/about'}>Acerca de Mi</Link>
          </li>
        </ul>
      </nav>
      </header >
    )
  }

}

export default Header
