import React from 'react'
import { Link } from 'react-router-dom'

export const NavItem = ( { route, enlace } ) => {
    return (
        <li className="nav-item">
        <Link 
        className="nav-link" 
        to={ route } >
          { enlace }
        </Link>
      </li>
    )
}