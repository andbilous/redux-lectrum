import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST, CREATE_POST_ASYNC } from './types';

import { api } from '../../REST';

export const fillPosts=(posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};
export const createPost=(post) => {
    console.log(post);

    return {
        type:    CREATE_POST,
        payload: post,
    };
};
export const fetchPostsAsync = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });
    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync=() => async (dispatch, post) => {
    console.log(post);
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const response = await api.posts.createPostAsync(post);
    const result = await response.json();

    console.log(result);
    dispatch(createPost(result.data));
};
