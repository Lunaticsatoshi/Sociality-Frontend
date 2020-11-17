import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import {likePost, unlikePost } from "../../redux/actions/dataActions";
//Material Ui Components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PublicIcon from "@material-ui/icons/Public";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";

const styles = {
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    marginBottom: 20,
  },
  image: {
    minHeight: 300,
    minWidth: 300,
    borderRadius: 5,
  },
  content: {
    padding: 0,
    onjectFit: "cover",
  },
  icon: {
      fontSize: 'medium',
  }
};

class posts extends Component {
  render() {
      dayjs.extend(relativeTime)
    const {
      classes,
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        imgUrl,
        postId,
        likeCount,
        commentCount,
      },
    } = this.props;

    let imageMarkup = imgUrl ? (<CardMedia
        image={imgUrl}
        title="Post Image"
        className={classes.image}
      />) : (<CardMedia
        image={imgUrl}
        title="Post Image"
      />);
    return (
      <Card className={classes.card} key={postId}>
        <div className="f-card">
          <div className="header">
            <div className="options">
              <ExpandMoreIcon />
            </div>
            <CardMedia
              image={userImage}
              title="User Profile"
              className="co-logo"
            />
            <div className="co-name">
              <Typography
                variant="h5"
                component={Link}
                to={`/users/${userHandle}`}
                color="primary"
              >
                {" "}
                {userHandle}{" "}
              </Typography>
            </div>
            <div className="time">
              <PublicIcon className={classes.icon} /> ·
              <Typography variant="body2" color="textSecondary">
                {" "}
                {dayjs(createdAt).fromNow()}{" "}
              </Typography>{" "}
            </div>
          </div>
          <CardContent className={classes.content}>
            <div className="content">
              <Typography variant="body1"> {body} </Typography>
            </div>
            <div className="reference">
              {imageMarkup}
            </div>
            <div className="social__container">
            <div className="interactions"><span> {likeCount} </span> Upvotes</div>
            <div className="interactions"><span> {commentCount} </span> Comments</div>
            </div>
          </CardContent>
          <div className="social">
            <div className="social-content"></div>
            <div className="social-buttons">
              <span>
                <FavoriteBorderIcon />
                {likeCount}
              </span>
              <span>
                <ChatBubbleOutlineIcon />
              </span>
              <span>
                <ShareIcon />
              </span>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

posts.propTypes = {
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

const mapActionsToProps = {
  likePost,
  unlikePost
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(posts));
