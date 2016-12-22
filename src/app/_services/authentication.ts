import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from '../_models/user';
import {UsersService} from '../_services/users.service';
import {Response, Http} from '@angular/http';

@Injectable()
export class Authentication {

    currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    error: string;

    getUser(): Observable<User> {
        return this.currentUser.asObservable();
    }

    constructor(private http: Http, private usersService: UsersService) {
        this.currentUser.subscribe((user: User) => console.log('updating user', user));
        this.currentUser.next(JSON.parse(localStorage.getItem('currentUser')));
    }

    update(data) {
        let updated = Object.assign({}, this.currentUser.getValue(), data);
        localStorage.setItem('currentUser', JSON.stringify(updated));
        this.currentUser.next(updated);
    }

    reset() {
        // todo: we should be clearing local storage, not assigning blank data to local storage
        let old: User = this.currentUser.getValue();
        let cleared: User = new User({id: old.id, email: old.email, step: old.step});

//        this.currentUser.next(cleared);
        this.usersService.updateUser(cleared).subscribe((user: User) => {
            this.currentUser.next(user);
        });
    }

    login(email: string, password: string) {
        return this.http.post('api/authenticate', {email: email, password: password})
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
