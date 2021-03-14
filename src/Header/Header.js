import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'


function Header() {

  return (
    <div>
      {/* bootstrap START */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid bar">
          {/* <a className="navbar-brand" href="#">MySite</a> */}
          <Link className="navbar-brand" to="/" >My Learning Site</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link nnn" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to="/Jokes">Jokes</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to='/Contact'>Contact</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to='/Products'>Products</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to='/StatePractice'>Numbers</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to='/TypingGame'>Typing Game</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to='/Search-movies'>Search Movies</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to='/Children-props'>Children/Props</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nnn" to='/UseParams'>UseParams</Link>
              </li>

              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* bootstrap END */}


    </div>
  )
}


export default Header