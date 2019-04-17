import { takeEvery, all, call } from 'redux-saga/effects';

import { CREATE_POST } from '../types';

import { createPost } from './workers';

function* watchCreatePost () {
    yield takeEvery(CREATE_POST, createPost);
}

export function* watchPosts () {
    yield all([call(watchCreatePost)]);
}
