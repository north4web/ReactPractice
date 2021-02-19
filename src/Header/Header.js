import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'


function Header() {

  return (
    <div>


      {/* bootstrap START */}


      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid bar">
          {/* <a class="navbar-brand" href="#">MySite</a> */}
          <Link class="navbar-brand" to="/">My Learning Site</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link class="nav-link active" to="/">Home</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/Jokes">Jokes</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to='/Contact'>Contact</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to='/Products'>Products</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to='/StatePractice'>Numbers</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to='/TypingGame'>Typing Game</Link>
              </li>


              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
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