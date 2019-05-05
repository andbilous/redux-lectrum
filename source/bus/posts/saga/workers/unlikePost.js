import {
    put,
    apply,
    select
} from 'redux-saga/effects';

import {
    api
} from '../../../../REST';
import {
    uiActions
} from '../../../ui/actions';
import {
    postsActions
} from '../../actions';

export function* unlikePost ({
    payload: postId,
}) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            const {
                message,
            } = yield apply(response, response.json);

            throw new Error(message);
        }
        const liker = yield select((state) => {
            return state.profile.removeAll(['avatar', 'token']);
        });

        console.log('> liker', liker);
        yield put(postsActions.unlikePost({
            liker,
            postId,
        }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'unlike worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
