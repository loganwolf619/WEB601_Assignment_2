import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from'./components/Navbar'; 
import Home from'./components/Home/Home';
import ContactUs from'./components/ContactUs/ContactUs';
import MyUsers from'./components/MyUsers';
import Default from './components/pages/Default'
import BrowseGraphics from './components/pages/BrowseGraphics/Browse'
import Footer from './components/Footer'
import Login from './components/pages/Login/Login'
import Register from'./components/Register/Register';
import MyGraphics from './components/pages/MyGraphics/MyGraphics';
import UploadGraphics from'./components/pages/UploadGraphics';
import EditUsers from'./components/EditUsers/EditUsers';
import EditGraphics from './components/pages/EditGraphics/EditGraphics';
import AboutUs from'./components/AboutUs/AboutUs';
// import Designs from'./components/childPages/Designs';
// import Illustrations from'./components/childPages/Illustrations';
// import Photos from'./components/childPages/Photos';



// import Message from'./components/Messsage';






const App = () => (
  <div className="container">
        <div className="header">
          <Navbar />
        </div>
        <div className="body"> 
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/browsegraphics" component={BrowseGraphics} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/myusers" component={MyUsers} />
              <Route path="/mygraphics" component={MyGraphics} />
              <Route path="/uploadgraphics" component={UploadGraphics} />
              <Route path="/editusers" component={EditUsers} />
              <Route path="/editgraphics" component={EditGraphics} />            
              <Route path="/aboutus" component={AboutUs} />
              <Route component={Default} />
            </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
)
// We will be exporting the variable
export default App;

