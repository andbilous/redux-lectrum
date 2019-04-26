import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchPosts ({ payload: comment }) {
    try {
        const response = yield apply(api, api.posts.fetch, [comment]);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !==200) {
            throw new Error(message);
        }
        yield put(postsActions.fetchPostsAsync());
    } catch (error) {
        yield put(uiActions.emitError(error));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
