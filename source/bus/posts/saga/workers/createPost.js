import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST/api';
import { createPost as createPostAC } from '../../actions';

export function* createPost ({ payload: comment }) {
    const response=yield apply(api, api.posts.create, [comment]);
    const result=yield apply(response, response.json);

    yield put(createPostAC(result.data));
}
