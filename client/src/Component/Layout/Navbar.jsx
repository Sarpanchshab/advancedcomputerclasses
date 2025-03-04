import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Start menu */}
      <section id="mu-menu">
        <nav className="navbar navbar-default fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              {/* Mobile Menu Button */}
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              {/* Logo */}
              <Link to="/" className="navbar-brand nav-logo-container">
                <img src="/assets/img/logo.png" className="nav-logo" alt="logo" />
                <span className="nav-text">ADVANCED COMPUTER CLASSES</span>
              </Link>

            </div>

            {/* Navbar Links */}
            <div id="navbar" className="navbar-collapse collapse">
              <ul id="top-menu" className="nav navbar-nav navbar-right main-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/course">Course</Link>
                </li>
                <li>
                  <Link to="/typing">Typing</Link>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Blog <span className="fa fa-angle-down"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <Link to="/blog-archive">Blog Archive</Link>
                    </li>
                    <li>
                      <Link to="/blog-single">Blog Single</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* End menu */}
    </>
  );
}

export default Navbar;
