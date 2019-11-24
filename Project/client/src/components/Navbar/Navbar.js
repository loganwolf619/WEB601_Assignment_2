
import React from 'react';
import {Link} from 'react-router-dom';
import {BtnContainer} from "./pageElements/Button";
import {Navbar} from "./pageElements/StyledNavBar";
import './Navbar.css';
import React, { useState } from 'react';
import {BtnContainer} from './pageElements/Buttons'
import {
  Merge,
  Navbar,
  NavbarScroller,
  NavbarApex,
  Nav,
  NavItem,
  NavigationDropdown,
  NavbarToggle,
  DropdownMenu,
  NavbarDropDownList } 
  from 'reactstrap';
 import './Navbar.css'


const Menu = () => {
  const [allowsAccess, activeAccess] = useState(false);

  const toggle = () => activeAccess(!allowsAccess);

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarApex href="/" className="apexlogo-container">                        
            <img src='../../icons/Logo.JPG' alt="designWebsite" className="logo-navbar"/>
        </NavbarApex>
        <NavItem>
            <h1 className="navBarBrand"><strong>Design and Illustration</strong></h1>
        </NavItem>
        <NavbarScroller light onClick={toggle} />
        <Merge allowsAccess={allowsAccess} navbar>
          <Nav className="autoNavbar" navbar>
            <NavItem className="linkContainer">
                <Link to="/Browse" className="navBarLink">
                    Browse Graphics
                </Link>
            </NavItem>
            <NavItem className="linkContainer">
                <Link to="/ContactUs" className="navBarLink">
                    Contact Us
                </Link>
            </NavItem>
            <NavigationDropdown nav ifNavBarTrue>
              <NavbarToggle nav caret className="dropDown">
                <span className="navBarLink">Users</span>
              </NavbarToggle>
              <DropdownMenu className="dropdownBackground" left>
                <NavbarDropDownList>
                    <Link to="/MyUsers" className="dropDownLink">
                        My Users
                    </Link>
                </NavbarDropDownList>
                <NavbarDropDownList>
                    <Link to="/UploadGraphics" className="dropDownLink">
                        Upload Graphics
                    </Link>
                </NavbarDropDownList>
                <NavbarDropDownList>
                    <Link to="/MyGraphics" className="dropDownLink">
                        My Graphics
                    </Link>
                </NavbarDropDownList>
                <NavbarDropDownList divider />
                <NavbarDropDownList>
                    <Link to="/" className="dropDownLink">
                        Sign Out
                    </Link>
                </NavbarDropDownList>
              </DropdownMenu>
            </NavigationDropdown>
            <NavItem className="navButtons">
                <Link to="/Login">
                    <BtnContainer>
                        <span>Login</span>
                    </BtnContainer>
                </Link>
            </NavItem>
            <NavItem className="navButtons">
                <Link to="/Register">
                    <BtnContainer>
                        <span>Register</span>
                    </BtnContainer>
                </Link>
            </NavItem>
          </Nav>
        </Merge>
      </Navbar>
    </div>
  );
}

export default Menu;