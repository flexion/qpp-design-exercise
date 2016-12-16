import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class Authentication {

    token: string;

    constructor() {
        this.token = localStorage.getItem('token');
    }

    getToken(): string {
        return this.token;
    }

    login(username: string, password: string) {
        if (username == password) {
            this.token = username;
            localStorage.setItem('token', this.token);
            return Observable.of('token');
        }
        return Observable.throw('Invalid Login');
    }

    logout() {
        this.token = undefined;
        localStorage.removeItem('token');
        return Observable.of(true);
    }

}
