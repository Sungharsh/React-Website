import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Profile from './profile/Profile';
import AllUsers from './userdata/AllUsers'; 
import InputToOutput from './inputOutput/InputToOutput';
import Alert from './conditioanalAlert/alert';
import Add from './calculator/Add';
import DOMAnimate from './domAnimate/DOMAnimate';
import DisplayAPI from './displayAPI/DisplayAPI';
import GetReusable from './reuseCom/GetReusable';
import Footer from './footer/Footer';
import './App.css';

// Global import if icons are used in many compon1ent in project
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faGithubSquare
// } from "@fortawesome/free-brands-svg-icons";

// library.add(fab, faYoutube, faFacebook, faTwitter, faInstagram, faGithubSquare);

function App() {
  return (
    <React.Fragment>
       <Navbar />
        <div className="App container is-fluid  has-background-light is-marginless">
          <div className="container main-container">
            <div className="columns">
              </div>
            <div className="columns">
              <div className="column">
              <Route path="/" exact component={Profile} />
              <Route path="/Profile" exact component={Profile} />
              <Route path="/AllUsers" component={AllUsers} />
              <Route path="/InputToOutput" component={InputToOutput} />
              <Route path="/Alert" component={Alert} />
              <Route path="/Add" component={Add}/>
              <Route path="/DOMAnimate" component={DOMAnimate}/>
              <Route path="/DisplayAPI" component={DisplayAPI}/>
              <Route path="/GetReusable" component={GetReusable}/>
              </div>
            </div>
      <Footer/>
          </div>
        </div>
    </React.Fragment>
  );
 }
 export default App;
