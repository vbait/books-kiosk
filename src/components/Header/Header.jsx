import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a className="navbar-brand mr-auto mr-lg-0" href=".">
        Books Kiosk
      </a>
      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href=".">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
