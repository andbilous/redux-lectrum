import { MAIN_URL, groupId } from './config';

export const api ={
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });
        },
        createPost (post) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    'x-no-auth':    groupId,
                    'Content-Type': 'aplication/json/',
                },
                body: JSON.stringify({ post }),
            });
        },
    },
}
;
