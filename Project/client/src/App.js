import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from'./components/Navbar'; 
import Home from'./components/pages/Home/Home';
import ContactUs from'./components/pages/ContactUs';
import MyUsers from'./components/pages/MyUsers/MyUsers';
import Default from './components/pages/Default';
import BrowseGraphics from './components/pages/BrowseGraphics/Browse';
import Footer from './components/Footer/Footer';
import {Login} from './components/pages/Login';
import {Register} from'./components/pages/Register';
import MyGraphics from './components/pages/MyGraphics/MyGraphics';
import UploadGraphics from'./components/pages/UploadGraphics/UploadGraphics';
import EditUsers from'./components/pages/EditUsers/EditUsers';
import EditGraphics from './components/pages/EditGraphics/EditGraphics';
import AboutUs from'./components/pages/AboutUs/AboutUs';

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

