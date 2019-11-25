
import {Link} from 'react-router-dom';
import {BtnContainer} from '../pageElements/Button';
import './Navbar.css';
import React, { useState } from 'react';
import {

Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } 
  from 'reactstrap';



const Menu = () => {
  const [allowsAccess, activeAccess] = useState(false);

  const toggle = () => activeAccess(!allowsAccess);

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/" className="apexlogo-container">                        
            <img src='../../icons/Logo.JPG' alt="designWebsite" className="logo-navbar"/>
        </NavbarBrand>
        <NavItem>
            <h1 className="navBarBrand"><strong>Design and Illustration</strong></h1>
        </NavItem>
        <NavbarToggler light onClick={toggle} />
        <Collapse allowsAccess={allowsAccess} navbar>
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
            <UncontrolledButtonDropdown nav ifNavigationTrue>
              <DropdownToggle nav caret className="dropDown">
                <span className="navBarLink">Users</span>
              </DropdownToggle>
              <DropdownMenu className="dropdownBackground" left>
                <DropdownItem>
                    <Link to="/MyUsers" className="dropDownLink">
                        My Users
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/UploadGraphics" className="dropDownLink">
                        Upload Graphics
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/MyGraphics" className="dropDownLink">
                        My Graphics
                    </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="/" className="dropDownLink">
                        Sign Out
                    </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
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
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;