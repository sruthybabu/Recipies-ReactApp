import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
      <Link to="/" className="navbar-brand">RECIPES</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/" className="nav-link active">Add Recipes</Link>   
        </li>
        <li className="nav-item">
            <Link to="/search" className="nav-link">Search</Link>
          
        </li>
        <li className="nav-item">
            <Link to="/view" className="nav-link">View Recipes</Link>
          
        </li>
        
      </ul>
    </div>
  </div>
</nav>







    </div>
  )
}

export default Navbar