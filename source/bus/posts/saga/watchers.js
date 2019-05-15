import {
    takeEvery,
    all,
    call
} from 'redux-saga/effects';

import {
    types
} from '../types';

import {
    worker,
    createPost,
    removePost,
    likePost,
    unlikePost
} from './workers';

export function* watchWorker () {
    yield takeEvery(types.FILL_POSTS, worker);
}
export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}
export function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}
export function* watchLikePost () {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}
export function* watchUnLikePost () {
    yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePost);
}
export function* watchPosts () {
    yield all([call(watchWorker), call(watchCreatePost), call(watchRemovePost), call(watchLikePost),
        call(watchUnLikePost)
    ]);
}
