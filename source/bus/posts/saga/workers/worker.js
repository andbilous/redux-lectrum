import {
    put,
    apply
} from 'redux-saga/effects';
import { postsActions } from '../../actions';
import {
    api
} from '../../../../REST';
import {
    uiActions
} from '../../../ui/actions';

export function* worker () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.fetch);

        console.log(response);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(result.message);
        }
        yield put(postsActions.fillPosts(result.data));
    } catch (error) {
        yield put(uiActions.emitError(error, 'worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
