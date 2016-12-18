import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from './user';

@Injectable()
export class Authentication {

    currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor() {
        this.currentUser.next(JSON.parse(localStorage.getItem('token')));
    }

    login(email: string, password: string):Observable<User> {
        if (email == password) {
            let user = new User({email: email});
            localStorage.setItem('token', JSON.stringify(user));
            this.currentUser.next(user);
            return Observable.of(user);
        }
        return Observable.throw('Invalid Login');
    }

    logout() {
        this.currentUser.next(null);
        localStorage.removeItem('token');
    }

}
