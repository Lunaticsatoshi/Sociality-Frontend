import React, { Component } from "react";
import axios from "axios";

//Custom Components
import Post from "../components/post/Post";

//Material Ui Components
import Grid from "@material-ui/core/Grid";

class home extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let recentPostsMarkup = this.state.posts ? (
      this.state.posts.map((post) => <Post post={post} key={post.postId} />)
    ) : (
      <p>Loading ...</p>
    );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          <div className="posts">{recentPostsMarkup}</div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Side Content</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
