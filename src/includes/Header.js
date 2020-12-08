/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/shop'>Shop</Link>
      </nav>
    </div>
  )
}
