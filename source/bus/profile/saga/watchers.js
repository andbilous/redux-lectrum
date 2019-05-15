import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { signup, updateAvatar } from './workers';
import { updateName } from './workers';

export function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}
export function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAvatar);
}
export function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}
export function* watchAuth () {

    yield all([call(watchSignup), call(watchUpdateName), call(watchUpdateAvatar)]);
}
