// Core
import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Feed, Profile, NewPassword } from '../pages';

import { book } from './book';

import { socket } from '../init/socket';

export default class Private extends Component {
    componentDidMount () {
        const { listenPosts }=this.props;

        listenPosts();
    }
    componentWillUnmount () {
        socket.removeListener('create');
    }
    render () {
        return (<Switch >
            <Route
                component = {
                    Feed
                }
                path = {
                    book.feed
                }
            /> <Route
                component = {
                    Profile
                }
                path = {
                    book.profile
                }
            /> <Route
                component = {
                    NewPassword
                }
                path = {
                    book.newPassword
                }
            /> <Redirect
                to = {
                    book.feed
                }
            /> </Switch>
        );

    }
}
