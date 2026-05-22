import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <NavLink to="/" className="logo">
          ApplyTrack
        </NavLink>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Dashboard
          </NavLink>

          <NavLink to="/add" className="button primary-button">
            Add Job
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
