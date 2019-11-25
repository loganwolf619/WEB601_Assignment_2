import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

const Footer = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="footerColumn">
          <MDBCol md="4">
          </MDBCol>
          <MDBCol md="3">
            <h5 className="footerCredits">ShutterBug</h5>
            <MDBRow>
            <MDBCol md="3">
            <pre><SocialIcon network="youtube" /><p className="list-item">YouTube</p></pre>
            </MDBCol>
            <MDBCol md="3">
            <SocialIcon network="facebook" /><p className="list-item">Facebook</p> 
            </MDBCol>
            <MDBCol md="3">
            <SocialIcon network="twitter" /><p className="list-item">Twitter</p>
            </MDBCol>
            <MDBCol md="3">
            <SocialIcon network="pinInterest" /><p className="list-item">PinInterest</p>
            </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="5">
            <h5 className="footerCredits">Links</h5>
            <Link to="/" className="list-item">
                  ContactUs
              </Link>
              <br/>
            <Link to="/Browse" className="list-item">
              Browse Graphics
              </Link>
              <br/>
              <Link to="/ContactUs" className="list-item">
                  ContactUs
              </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="footerCredits">
          &copy; {new Date().getFullYear()} Copyright: <Link to='/'> Apex Shutterbug </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;