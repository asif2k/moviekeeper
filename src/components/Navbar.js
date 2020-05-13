import React, { useRef } from 'react';

const Navbar = () => {    
   
// top navigation bar

  const main_navbar = useRef()
    return (<div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
       <a className="navbar-brand" href="#">
    <img src="tickets.svg" width="26" height="26" className="d-inline-block align-top" alt=""/>
    &nbsp;MovieKeeper
  </a>

    <button className="navbar-toggler" onClick={e => main_navbar.current.classList.toggle("collapse")} type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" ref={main_navbar}>

      <ul className="navbar-nav  mr-auto">
        <li className="nav-item ">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/favourites">My Favourites</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/watchlist">Watch List</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0" action="/"  >
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="searchtext" placeholder="Movie title" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </div>
        </div>
      </form>
    </div>

  </div>)
  
  
  };

  export default Navbar