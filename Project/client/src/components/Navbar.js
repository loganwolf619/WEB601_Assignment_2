import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer, ButtonLoad} from "./pageElements/Button";
import {NavWrapper} from "./pageElements/StyledNavBar";
import './Navbar.css'
import DropDown from './pageElements/DropDown';


export default class Navbar extends Component {
    render() {
        return (
            <div className="websiteWrapper">
              <div className="container">
                <div className="subcontainer">
                  <Link to="/">
                      Apex ShutterBug
                  </Link>
                </div>
                <div className="subcontainer">
                  <Link to="/browsegraphics">
                    Browse Graphics
                  </Link>
                  <div className="subcontainer">
                  <Link to="/contactus">
                      Contact US
                  </Link>
                </div>
                <div className="subcontainer">
                  <Link to="/uploadgraphics">
                     Upload
                  </Link>
                </div>
                <div className="subcontainer">
                  <Link to="/login">
                    Login
                  </Link>
                </div>          
                   <div className="subcontainer">
                  <Link to="/mygraphics">
                    My Graphics
                  </Link>
                </div>
                <div className="subcontainer">
                  <Link to="/register">
                    Register
                  </Link>
                  <div className="subcontainer">
                  <Link to="/myusers">
                      My Users
                  </Link>
                </div>

                </div>
                </div>
              </div>
            </div>
        )
    }
}
