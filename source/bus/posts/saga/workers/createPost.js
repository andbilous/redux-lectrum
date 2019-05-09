import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../actions';

export function* createPost ({ payload: comment }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.createPostAsync, [comment]);
        const { data: newPost, message } = yield apply(response, response.json);

        if (response.status !==200) {
            throw new Error(message);
        }
        yield put(postsActions.createPost(newPost));

    } catch (error) {
        yield put(uiActions.emitError(error, 'createPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
