import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { worker } from './workers';
import { createPost } from './workers/createPost';

export function* watchWorker () {
    yield takeEvery(types.FILL_POSTS, worker);
}
export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST, createPost);
}

export function* watchDomain () {
    yield all([call(watchWorker)]);
}
