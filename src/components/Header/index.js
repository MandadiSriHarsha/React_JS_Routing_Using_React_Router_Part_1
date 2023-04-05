import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '0px 10px 0px 0px',
            fontFamily: 'Roboto',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '0px 10px 0px 0px',
            fontFamily: 'Roboto',
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '0px 10px 0px 0px',
            fontFamily: 'Roboto',
          }}
        >
          Contact
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
