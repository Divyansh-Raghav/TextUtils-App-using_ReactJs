import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.AboutText}</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
      <label >Select Theme:</label>
      <button className="btn btn-sm btn-outline-dark mx-1" onClick={()=>props.toggleMode('dark')} style={{ color: '#17cbd1', border: '2px solid #17cbd1', backgroundColor: 'transparent' }}>Dark</button>
      <button className="btn btn-sm btn-outline-dark mx-1" onClick={()=>props.toggleMode('green')} style={{ color: 'green', border: '2px solid green', backgroundColor: 'transparent' }} >Green</button>
      <button className="btn btn-sm btn-outline-dark mx-1" onClick={()=>props.toggleMode('red')}  style={{ color: 'red', border: '2px solid red', backgroundColor: 'transparent' }}>Red</button>
      <button className="btn btn-sm btn-outline-dark mx-1" onClick={()=>props.toggleMode('light')}style={{ color: 'gray', border: '2px solid gray', backgroundColor: 'transparent' }} >Light</button>
      
     
    </div>
    </div>
  </div>
</nav>
    </>
  )
}

