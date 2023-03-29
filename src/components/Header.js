import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to='/' className='logo'>
        Blog
      </Link>
      <nav>
        <Link to='/login'>login</Link>
        <Link to='/register'>register</Link>
      </nav>
    </header>
  )
}

export default Header
