import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {

    return(

  <footer className="page-footer font-small special-color-dark pt-4">
  
    <div className="Footercontainer">
  
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>
      <Link to="/" className="list-item">
        Contact Us
      </Link>
  
    </div>
  
    <div className="footer-copyright text-center py-3">© Apex-ShutteBug 2019 Copyright:
      <a href="#!"> Apex ShutterBug</a>
    </div>

  </footer>
    )
}

  export default Footer;