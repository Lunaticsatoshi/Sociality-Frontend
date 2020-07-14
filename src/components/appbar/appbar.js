import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'; 

class Appbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    <Button color="inherit" component={Link} to="/login"><div className="app"><AccountCircleOutlinedIcon fontSize="large" />Login</div></Button>
                    <Button color="inherit" component={Link} to="/"><div className="app"><HomeIcon fontSize="large"/>Home</div></Button>
                    <Button color="inherit" component={Link} to="/signup"><div className="app"><AddOutlinedIcon fontSize="large"/>Sign Up</div></Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Appbar

