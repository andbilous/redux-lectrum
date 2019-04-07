import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST_ASYNC } from './types';

import { api } from '../../REST';

export const fillPosts=(posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
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
export const createPostAsync=() => async (comment) => {
    dispatch({
        type:    CREATE_POST_ASYNC,
        payload: comment,
    });

    const response=await api.posts.create();
    const result=await response.json();

    dispatch(fillPosts(result.data));
}
;
