import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsMonkey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Businees">Businees</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Entertainmet">Entertainmet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/General">General</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Health">Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Science">Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sports">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Technology">Technology</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
