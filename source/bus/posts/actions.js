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
    removePost: (post) => {
        return {
            type:    types.REMOVE_POST,
            payload: post,
        };
    },
    removePostAsync: (post) => async (dispatch) => {
        dispatch({
            type: types.REMOVE_POST_ASYNC,
        });
        const response = await api.posts.removePostAsync(post);

        if (response.status===204) {
            dispatch(postsActions.removePost(post));
        }

    },
    fetchPostsAsync: () => async (dispatch) => {
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

        dispatch(postsActions.createPost(result.data));
    },
};
