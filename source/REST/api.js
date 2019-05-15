import {
    MAIN_URL,
    groupId
} from './config';

export const api = {
    get token () {
        return localStorage.getItem('token');
    },
    auth: {
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        login (creds) {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    creds,
                ),
            });
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    { token: api.token }
                ),
            });
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
    },
    posts: {
        fetch () {
            console.log(api.token);

            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    Authorization: api.token,
                },
            });
        },
        createPostAsync (post) {
            console.log(post);

            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    Authorization:  api.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    { comment: post },
                ),
            });
        },
        removePostAsync (postId) {
            return fetch(`${MAIN_URL}/feed/${postId}`, {
                method:  'DELETE',
                headers: {
                    Authorization: api.token,
                },
            });
        },
        like (postId) {
            return fetch(`${MAIN_URL}/feed/like/${postId}`, {
                method:  'PUT',
                headers: {
                    Authorization: api.token,
                },
            });
        },
    },
    profile: {
        updateProfile (profileInfo) {
            return fetch(`${MAIN_URL}/user`, {
                method:  'PUT',
                headers: {
                    Authorization:  api.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileInfo),
            });
        },
        updateAvatar (avatarFormData) {
            return fetch(`${MAIN_URL}/image`, {
                method:  'POST',
                headers: {
                    Authorization: api.token,
                },
                body: avatarFormData,
            });
        },
    },
    users: {
        fetch () {
            return fetch(`${MAIN_URL}/user/all`, {
                method:  'GET',
                headers: {
                    Authorization: api.token,
                },
            });
        },
    },
};
