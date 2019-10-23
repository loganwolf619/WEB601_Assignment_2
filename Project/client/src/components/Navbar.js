import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./pageElements/Button";
import {ButtonLoad} from "./Button";
import {NavWrapper} from "./StyledNavBar";
import './Navbar.css'
import DropDown from './pageElements/DropDown';


export default class Navbar extends Component {
    render() {
        return (
          
                  <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light"> 
                    <div>
                      <Link to="/">
                        <img src='../icons/Logo.JPG' className="navbarTag" alt="apexShutterbug"></img>   
                          <ButtonLoad className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </ButtonLoad>
                      </Link>
                    </div>       

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="navbar-item active">
                          <label className="navbar-link">
                            <DropDown/>
                          </label>
                        </li>

                        <li className="navbar-item">
                          <Link to="/contactus" className="navbar-item">
                            <a className="navbar-link" href="contact">Contact Us</a>
                          </Link>
                        </li>

                        <li className="navbar-item">
                          <Link to="/browsegraphics" className="navbar-item">
                              <a className="navbar-link" href="browsegraphics">Browse Graphics</a>
                          </Link>
                        </li>

                        <li className="navbar-item">
                          <ButtonContainer>
                            <span>
                              <Link to="/register" className="navbar-item-item" style={{float: 'right'}}>
                                <a className="nav-link" href="register">Register</a>
                              </Link>
                            </span>
                          </ButtonContainer>
     
                        </li>

                        <li>
                        <ButtonContainer>
                            <span>
                              <Link to="/login" className="navbar-item-item" style={{float: 'right'}}>
                                <a className="nav-link" href="register">Login</a>
                              </Link>
                            </span>
                          </ButtonContainer>
                        </li>

                        <li className="navbar-item">
                          <Link to="/aboutus" className="navbar-item">
                              <a className="navbar-link" href="about">About Us</a>
                          </Link>
                        </li>

                        {/* <div class="dropdown">
                          <li className="navbar-item dropdown">
                            <Link to="/mygraphics" className="bar-item dropdown">
                                <ButtonLoad className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Graphics
                                </ButtonLoad>
                                <div className="dropdown-menu" aria-labelledby="navbardropdown">
                                  <div className="dropdown-divider"></div>
                                    <Link to="/designs" className="dropdown-item">
                                      <a className="dropdown-item" href="designs">Designs</a>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/illustrations" className="dropdown-item">
                                      <a className="dropdown-item" href="illustrations">Illustrations</a>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/photos" className="dropdown-item">
                                      <a className="dropdown-item" href="photos">Photos</a>
                                    </Link>
                                </div>
                              </Link>
                          </li>
                        </div> */}
                      </ul>

                      <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <ButtonLoad className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</ButtonLoad>
                      </form>
                  </div>
                </NavWrapper>
        )
    }
}
