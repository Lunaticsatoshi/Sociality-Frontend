import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

//Redux
import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

//Custom Components
import Post from "../components/post/Post";
import Profile from "../components/Profile/profile";
//Material Ui Components
import Grid from "@material-ui/core/Grid";

class home extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
      posts.map((post) => <Post post={post} key={post.postId} />)
    ) : (
      <p>Loading ...</p>
    );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          <div className="posts">{recentPostsMarkup}</div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  data: state.data
})
export default connect(mapStateToProps, { getPosts })(home);
