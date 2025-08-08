import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h1>NPower React Router Lesson</h1>
        <section>
        {/* Add your NavLinks Below this comment */}
        <NavLink to="/" className="navlink">Home Page</NavLink>
        <NavLink to="/about" className="navlink">About Page</NavLink>
        <NavLink to="/product/1" className="navlink">Product 1</NavLink>
        <NavLink to="/product/2" className="navlink">Product 2</NavLink>
        {/* Add your NavLinks Above this comment */}
        </section>
    </nav>
  )
}

export default NavBar