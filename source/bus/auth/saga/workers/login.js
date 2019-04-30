import {
    put,
    apply
} from 'redux-saga/effects';

import {
    api
} from '../../../../REST';
import {
    authActions
} from '../../../auth/actions';
import {
    uiActions
} from '../../../ui/actions';

export function* login ({
    payload: userData,
}) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.auth.login, [userData]);
        const {
            data: profile,
            message,
        } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        console.log('-> profile', profile);

        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, 'login worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
