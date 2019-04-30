import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { worker } from './workers';

export function* watchWorker () {
    yield takeEvery(types.FILL_POSTS, worker);
}

export function* watchDomain () {
    yield all([call(watchWorker)]);
}
