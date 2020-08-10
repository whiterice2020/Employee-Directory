import React from 'react';
// import logo from './logo.svg';
// import '../App.css';

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="UserInput">Search</span>
          </div>
          <input className="form-control mr-sm-2" type="search" placeholder="name" aria-label="Search" 
          // onChange={e => context.handleSearchChange(e)}
          />
        </div>
    </div>

      </nav>
    </div>
  );
}

export default Nav;
