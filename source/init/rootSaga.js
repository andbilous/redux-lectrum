import { all, call } from 'redux-saga/effects';
import { watchPosts } from '../bus/posts/saga/watchers';
import { watchAuth } from '../bus/auth/saga/watchers';
import { watchUsers } from '../bus/users/saga/watchers';
import { watchProfile } from '../bus/profile/saga/watchers';

export function* rootSaga () {
    console.log(watchPosts);
    console.log(watchAuth);
    console.log(watchUsers);
    console.log(watchProfile);
    yield all([call(watchPosts), call(watchAuth), call(watchUsers), call(watchProfile)]);
}
