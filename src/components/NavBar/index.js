import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" id="logo" href="/">Mike Havrilak</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav" id="navbarNav">
                <ul className="navbar-nav">
                     <li className="nav-item active">
                        <Link className="nav-link" to="/index.js"><span className="sr-only">Mike Havrilak</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About <span className="sr-only">About</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <p><a href="https:https://www.linkedin.com/in/mike-havrilak-96b1548/" target="_blank"><i className="fab fa-linkedin"></i>Linkedin</a></p>
                <p><a href="https://github.com/MHavrilak" target="_blank"><i className="fab fa-github-square"></i>Github</a></p>   
            </div>
    </nav>


    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link className="navbar-brand" to="/">
    //     Mike Havrilak
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           to="/"
    //           className={
    //             window.location.pathname === "/" || window.location.pathname === "/about"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/portfolio"
    //           className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //         >
    //           Portfolio
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/contact"
    //           className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //         >
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
