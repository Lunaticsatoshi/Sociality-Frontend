import React, { Component } from "react";
import PropTypes from "prop-types";
/* import axios from "axios"; */
import { Link } from 'react-router-dom';
//Matreial Ui Components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import themeFile from "../util/theme";
//Redux
import { connect } from 'react-redux';
import { loginUser } from "../redux/actions/userActions";

const styles = themeFile;

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors){
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };

  render() {
    const { classes, UI: { loading } } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2" className={classes.header}>
            Login
          </Typography>
          <div className="form">
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                required
                id="email"
                className={classes.textField}
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                required
                id="password"
                className={classes.textField}
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
              />
              {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={loading}
                fullWidth
              >
                Login
                {loading && (
                  <CircularProgress size={30} className={classes.progress} color="secondary" />
                )}
              </Button>
              <br />
              <small className="small">Dont have an account? <Link to="/signup"> Sign up </Link></small>
            </form>
          </div>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login));
