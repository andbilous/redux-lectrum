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

export function* removePost () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.removePostAsync);

        if (response.status !== 200) {
            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, 'removePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
