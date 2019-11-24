import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import { Icons } from 'react-social-icons'

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="leftFooter">
          <MDBCol md="4">
          </MDBCol>
          <MDBCol md="3">
            <h5 className="links">Connect With Us</h5>
            <MDBRow>
            <MDBCol md="3">
            <pre><Icons network="Facebook" /><p className="item">Spotify</p></pre>
            </MDBCol>
            <MDBCol md="3">
            <Icons network="Instagram" /><p className="item">YouTube</p> 
            </MDBCol>
            <MDBCol md="3">
            <Icons network="Twitter" /><p className="item">Soundcloud</p>
            </MDBCol>
            <MDBCol md="3">
            <Icons network="PinInterest" /><p className="item">Facebook</p>
            </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="5">
            <h5 className="link">Links</h5>
            <Link to="/" className="item">
                  Support
              </Link>
              <br/>
            <Link to="/Browse" className="item">
              BrowseMusic
              </Link>
              <br/>
              <Link to="/ContactUs" className="item">
                  Support
              </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
  export default Footer;