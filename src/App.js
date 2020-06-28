import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";

//Components
import Navbar from "./components/navbar/navbar";
import HiddenNavBar from "./components/navbar/hidden_navbar";

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HiddenNavBar />
      <Router>
        <Switch>
          <Route exact path="/"  component={home}/>
          <Route exact path="/login"  component={login}/>
          <Route exact path="/signup"  component={signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
