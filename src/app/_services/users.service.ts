import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../_models/user';
import {Registration} from '../_models/registration';

@Injectable()
export class UsersService {

    constructor(private http: Http) {
    }

    getUsers() {
        return this.http.get('/api/users');
    }

    updateUser(user: User) {
        return this.http.put(`/api/users/${user.id}`, JSON.stringify(user));
    }

    registerUser(registration: Registration) {
        return this.http.post('/api/users', registration);
    }


}
