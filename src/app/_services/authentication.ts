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
    user: User;
    userService: UsersService;
    error: string;

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
        //todo: we should be clearing local storage, not assigning blank data to local storage
        this.currentUser.subscribe((user: User) => {
            this.user = user;
            this.user.title = "";
            this.user.first_name = "";
            this.user.last_name = "";
            this.user.suffix = "";
            this.user.birth_day = "";
            this.user.birth_month = "";
            this.user.birth_year = "";
            this.user.company_name = "";
            this.user.company_title = "";
            this.user.address = "";
            this.user.address2 = "";
            this.user.city = "";
            this.user.state = "";
            this.user.zip = "";
            this.user.step = "profile";
            this.user.dashboard_landings = 1;
            this.usersService.updateUser(this.user)
                .subscribe(
                    () => {
                        console.log('success');
                        //   this.router.navigate(['/']);
                    },
                    (e:any) => this.error = 'Error updating'
                );
            console.log('updating user', user)
        });

        //todo: figure out why the following doesn't completely clear local storage
       // localStorage.clear();
       // this.currentUser.next(null);
    }

    login(email: string, password: string): Observable<User> {
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
