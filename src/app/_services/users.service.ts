import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from '../_models/user';
import {Registration} from '../_models/registration';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService {

    constructor(private http: Http) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get('api/users')
            .map((r: Response) => r.json());
    }

    updateUser(user: User) {
        return this.http.put(`api/users/${user.id}`, JSON.stringify(user))
            .map((r: Response) => r.json());
    }

    registerUser(registration: Registration) {
        return this.http.post('api/users', registration)
            .map((r: Response) => r.json());
    }


}
