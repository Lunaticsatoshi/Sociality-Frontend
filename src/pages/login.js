import React, { Component } from "react";
import PropTypes from "prop-types";
//Matreial Ui Components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    textAlign: "center",
    color: "white",
  },
  header: {
    fontSize: 32,
    margin: "20px auto 20px auto",
  },
  textField: {
    borderRadius: 25,
    margin: "20px auto 20px auto",
    backgroundColor: "white",
    [`& fieldset`]: {
        borderRadius: 25,
    }
  },
  button: {
      marginTop: 20,
      backgroundColor: "red",
      borderRadius: 25,
  }
};

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: {},
    };
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      });
  };
  handleSubmit = (event) => {
    console.log("submit");
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2" className={classes.header}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              required
              id="outlined-required"
              className={classes.textField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              className={classes.textField}
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" className={classes.button}fullWidth>Login</Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);
