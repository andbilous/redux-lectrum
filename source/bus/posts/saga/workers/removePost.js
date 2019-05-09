import {
    put,
    apply
} from 'redux-saga/effects';

import {
    api
} from '../../../../REST';
import {
    uiActions
} from '../../../ui/actions';
import { postsActions } from '../../actions';

export function* removePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        yield apply(api, api.posts.removePostAsync, [postId]);

        yield put(postsActions.removePost(postId));

    } catch (error) {
        yield put(uiActions.emitError(error, 'remove post worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
