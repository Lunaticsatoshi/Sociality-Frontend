import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

// Redux
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../../redux/actions/userActions";

// Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import ThemeFile from "../../util/theme";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

//Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = ThemeFile;

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  handleLogout = () => {
    this.props.logoutUser();
  }
  render() {
    const {
      classes,
      user: {
        credentials: {
          userHandle,
          createdAt,
          imageUrl,
          bio,
          website,
          location,
          followers,
          following,
        },
        loading,
        authenticated,
      },
    } = this.props;
    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className="image-wrapper">
              <img src={imageUrl} alt="profile" className="profile-image" />
              <input
                type="file"
                id="imageInput"
                onChange={this.handleImageChange}
                hidden="hidden"
              />
              <Tooltip title="Edit Profile Picture" placement="top">
                <IconButton onClick={this.handleEditPicture} className="button">
                  <EditIcon color="primary" />
                </IconButton>
              </Tooltip>
            </div>
            <hr />
            <div className="profile-details">
              <MuiLink
                component={Link}
                to={`/users/${userHandle}`}
                color="success"
                variant="h5"
              >
                @{userHandle}
              </MuiLink>
              <hr />
              {bio && <Typography variant="body2"> {bio} </Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOnIcon color="secondary" /> <span> {location} </span>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <PublicIcon color="secondary" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <ScheduleIcon color="secondary" />{" "}
              <span>Joined Since {dayjs(createdAt).format("MMM YYYY")}</span>
            </div>
            <Tooltip title="Logout">
              <IconButton onClick={this.handleLogout}>
                <ExitToAppIcon color="secondary"/>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography variant="body2" align="center">
            Not Logged In??
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </div>
        </Paper>
      )
    ) : (
      <p>...Loading Profile</p>
    );
    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser, uploadImage };

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile));
