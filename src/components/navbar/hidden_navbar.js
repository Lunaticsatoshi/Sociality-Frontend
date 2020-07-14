import React from "react";
import {Link} from 'react-router-dom';


//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

const HiddenNavbar = () => {
  return (
    <nav className="hidden-navbar">
      <AppBar>
      <Toolbar className="nav-container">
        <Button color="inherit" component={Link} to="/"><div className="app"><HomeIcon fontSize="large"/></div></Button>
        <Button color="inherit"><div className="app"><TrendingUpIcon fontSize="large"/></div></Button>
        <Button color="inherit"><div className="app"><PeopleIcon fontSize="large"/></div></Button>
        <Button color="inherit"><div className="app"><NotificationsIcon fontSize="large"/></div></Button>
        <Button color="inherit"><div className="app"><MenuIcon fontSize="large"/></div></Button>
      </Toolbar>
    </AppBar>
    </nav>
  );
};

export default HiddenNavbar;
