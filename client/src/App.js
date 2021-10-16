import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {  Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import {  Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Login/Auth";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
     
      <Navbar />
      <Footer />
      <div className="app-wrapper-content">
        <Switch>
          <Route exact path="/" render={() => <News />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/auth" render={() => <Auth />} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="*" render={() => <div>404 Not found</div>} />
          
        </Switch>
      </div>
    </div>
  );
}

export default App