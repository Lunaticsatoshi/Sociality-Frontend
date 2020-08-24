import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import themeFile from "../util/theme";
//Matreial Ui Components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

//Redux 
import { connect } from 'react-redux';
import { signupUser } from "../redux/actions/userActions";

const styles = themeFile;

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      userHandle: "",
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
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      userHandle: this.state.userHandle,
    };
    this.props.signupUser(newUserData, this.props.history);
  };
  render() {
    const { classes, UI: { loading } } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2" className={classes.header}>
            SignUp
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
                id="handle"
                className={classes.textField}
                name="userHandle"
                type="text"
                label="User Handle"
                variant="outlined"
                helperText={errors.userHandle}
                error={errors.userHandle ? true : false}
                value={this.state.userHandle}
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
              <TextField
                required
                id="confirmPassword"
                className={classes.textField}
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                variant="outlined"
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                value={this.state.confirmPassword}
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
                SignUp
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progress}
                    color="secondary"
                  />
                )}
              </Button>
              <br />
              <small className="small">
                Already a Member? <Link to="/login"> Login </Link>
              </small>
            </form>
          </div>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(signup));
