import {Observable} from 'rxjs';
import {User} from '../app/_models/user';

export class AuthenticationStub {
    getUser(): Observable<User> {
        return Observable.of(new User({email: 'test@test.com'}));
    }

    logout() {}
}

