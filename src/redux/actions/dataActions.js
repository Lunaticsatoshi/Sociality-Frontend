import {SET_POSTS, LOADING_DATA, LIKE_POST, UNLIKE_POST} from "../types";
import axios from 'axios';

//Get all the posts
export const getPosts = () => dispatch => {
    dispatch({type: LOADING_DATA});
    axios.get('/posts')
        .then(res => {
            dispatch({
                type: SET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_POSTS,
                payload: []
            })
        })
}

//TODO: Like a POST
export const likePost = (postId) => dispatch => {
    axios.get(`/post/${postId}/like`)
        .then(res => {
            dispatch({
                type: LIKE_POST,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

//TODO: UNLIKE a POST
export const unlikePost = (postId) => dispatch => {
    axios.get(`/post/${postId}/unlike`)
        .then(res => {
            dispatch({
                type: UNLIKE_POST,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}