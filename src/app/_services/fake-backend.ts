import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Injectable, Provider} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DATA_USERS} from '../../assets/data/users';
import {DATA_PRACTICES} from '../../assets/data/practices';

/**
 * lifted from https://github.com/cornflourblue/angular2-registration-login-example/blob/master/app/_helpers/fake-backend.ts
 */

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions): Http {
    // array in local storage for registered users
    let users: any[] = JSON.parse(localStorage.getItem('users'));
    console.log('users from localstorage:', users);
    if (!users) {
        users = DATA_USERS;
        console.log('users set in localstorage', users);
        localStorage.setItem('users', JSON.stringify(users));
    }
    let practices: any[] = JSON.parse(localStorage.getItem('practices'));
    console.log('practices from localStorage:', practices);
    if (!practices) {
        practices = DATA_PRACTICES;
        localStorage.setItem('practices', JSON.stringify(practices));
    }

// configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        let url: string = connection.request.url;
        let methodName: string = RequestMethod[connection.request.method];
        let method: number = connection.request.method;
        console.log(`${methodName}: ${url}`, connection.request.getBody());

        function hasToken(): boolean {
//                return connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token';
            return true;
        }

        function respondUnauthorized(): void {
            console.log('unauthorized');
            connection.mockRespond(new Response(new ResponseOptions({status: 401})));
        }

        setTimeout(() => {

            // authenticate
            if (url.endsWith('api/authenticate') && method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());

                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.email === params.email && user.password === params.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    console.log('successful auth');
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: Object.assign(user, {token: 'fake-jwt-token'})
                    })));
                    return;
                } else {
                    // else return 400 bad request
                    connection.mockError(new Error('Username or password is incorrect'));
                    return;
                }
            }

            // get practices
            if (url.endsWith('api/practices') && method === RequestMethod.Get) {
                if (hasToken()) {
                    console.log(practices);
                    connection.mockRespond(new Response(new ResponseOptions({status: 200, body: practices})));
                    return;
                } else {
                    respondUnauthorized();
                    return;
                }
            }
            // get users
            if (url.endsWith('api/users') && method === RequestMethod.Get) {
                if (hasToken()) {
                    connection.mockRespond(new Response(new ResponseOptions({status: 200, body: users})));
                    return;
                } else {
                    respondUnauthorized();
                    return;
                }
            }

            // get user by id
            if (url.match(/api\/users\/\d+$/)) {
                if (hasToken()) {
                    // find user by id in users array
                    let urlParts = url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1], 10);
                    let matchedUsers = users.filter(user => {
                        return user.id === id;
                    });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
                    if (!user) {
                        connection.mockError(new Error('Not found'));
                        return;
                    }

                    if (method === RequestMethod.Get) {
                        // respond 200 OK with user
                        connection.mockRespond(new Response(new ResponseOptions({status: 200, body: user})));
                        return;
                    }
                    if (method === RequestMethod.Put) {
                        Object.assign(user, JSON.parse(connection.request.getBody()));
                        localStorage.setItem('users', JSON.stringify(users));
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        connection.mockRespond(new Response(new ResponseOptions({status: 200, body: user})));
                        return;
                    }
                    if (method === RequestMethod.Delete) {
                        users.splice(users.indexOf(user), 1);
                        localStorage.setItem('users', JSON.stringify(users));
                        connection.mockRespond(new Response(new ResponseOptions({status: 200})));
                        return;
                    }
                } else {
                    // return 401 not authorised if token is null or invalid
                    respondUnauthorized();
                    return;
                }
            }

            // create user
            if (url.endsWith('api/users') && method === RequestMethod.Post) {
                // get new user object from post body
                let newUser = JSON.parse(connection.request.getBody());

                // validation
                let duplicateUser = users.filter(user => {
                    return user.email === newUser.email;
                }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser.email + '" is already taken'));
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                connection.mockRespond(new Response(new ResponseOptions({status: 200})));
                return;
            }

        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
