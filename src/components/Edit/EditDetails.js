import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { editUserDetails } from "../../redux/actions/userActions";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ThemeFile from "../../util/theme";

//Icon
import EditIcon from "@material-ui/icons/Edit";

const styles = ThemeFile;

class EditDetails extends Component {
  state = {
    bio: "",
    website: "",
    location: "",
    company: "",
    open: false,
  };

  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : "",
      company: credentials.company ? credentials.company : "",
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
    this.mapUserDetailsToState(this.props.credentials);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
      const userDetails = {
          bio: this.state.bio,
          website: this.state.website,
          location: this.state.location,
          company: this.state.company
      };
      this.props.editUserDetails(userDetails);
      this.handleClose();
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Tooltip title="Edit details" placement="top">
          <IconButton onClick={this.handleOpen} className={classes.editButton}>
            <EditIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit Your Details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                autoFocus
                name="bio"
                label="Bio"
                type="text"
                multiline
                rows="4"
                fullWidth
                placeholder="Say Something about Yourselves...."
                className={classes.textField}
                value={this.state.bio}
                onChange={this.handleChange}
              />
              <TextField
                name="website"
                label="Website"
                type="text"
                fullWidth
                placeholder="Your Website..."
                className={classes.textField}
                value={this.state.website}
                onChange={this.handleChange}
              />
              <TextField
                name="location"
                label="Location"
                type="text"
                fullWidth
                placeholder="Tell us about your location"
                className={classes.textField}
                value={this.state.location}
                onChange={this.handleChange}
              />
              <TextField
                name="company"
                label="Company"
                type="text"
                fullWidth
                placeholder="Enter your Company Name"
                className={classes.textField}
                value={this.state.company}
                onChange={this.handleChange}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="secondary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { editUserDetails })(
  withStyles(styles)(EditDetails)
);
