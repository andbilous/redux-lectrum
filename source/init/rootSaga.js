import { all, call } from 'redux-saga/effects';
import { watchDomain } from '../bus/posts/saga/watchers';
import { watchAuth } from '../bus/auth/saga/watchers';

export function* rootSaga () {

    yield all([call(watchDomain), call(watchAuth)]);
}
