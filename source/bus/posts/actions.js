import { types } from './types';

import { api } from '../../REST';

export const postsActions ={
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },
    removePostAsync: (post) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: post,
        };
    },
    fetchPostsAsync: () => async (dispatch, getState) => {
        dispatch({
            type: types.FETCH_POSTS_ASYNC,
        });
        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data));
    },

    createPostAsync: (comment) => async (dispatch) => {
        dispatch({
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        });
        const response = await api.posts.createPostAsync({ comment });
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data));
    },
};
