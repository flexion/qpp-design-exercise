import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from '../_models/user';
import {Response, Http} from '@angular/http';

@Injectable()
export class Authentication {

    currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private http: Http) {
        this.currentUser.next(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser.subscribe((user: User) => console.log('updating user', user));
    }

    update(data) {
        console.log('circular', data);
        let updated = Object.assign({}, this.currentUser.getValue(), data);
        localStorage.setItem('currentUser', JSON.stringify(updated));
        this.currentUser.next(updated);
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post('/api/authenticate', {email: email, password: password})
            .map((r: Response) => {
                let user = r.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUser.next(user);
                    return Observable.of(user);
                }
            })
            .catch((error: any) => Observable.throw('Authentication error'));
    }

    logout() {
        this.currentUser.next(null);
        localStorage.removeItem('currentUser');
    }

}
