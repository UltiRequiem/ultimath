import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'

import '../assets/styles/components/Header.scss'

const Header = () => (
  <Link to="/">
    <div className="header">
      <img src={logo} className="header__img" alt="UltiMath Logo" />
      <h1>UltiMath</h1>
    </div>
  </Link>
)

export default Header
