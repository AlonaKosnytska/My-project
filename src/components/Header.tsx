import React from 'react'
import { HeaderInterface } from '../types/props'
import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
const Header = ({HomePage}:HeaderInterface) => {
  return (
    <div>
      <nav>
        <a href="#">{HomePage}</a>
        <Link to='HomePage'>HomePage</Link>
      </nav>
      
      
    </div>
  )
}

export default Header