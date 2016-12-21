import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from '../_models/user';
import {Registration} from '../_models/registration';
import {Observable} from 'rxjs';
import {UsersService} from './users.service';
import {PracticesService} from './practices.service';
import {Authentication} from './authentication';
import {Provider} from '../_models/provider';
import {Connection, EmployeeRole, ConnectionStatus} from '../_models/surrogate';

@Injectable()
export class ConnectionsService {

    private user: User;

    constructor(private usersService: UsersService,
                private practicesService: PracticesService,
                private authentication: Authentication,
                private http: Http) {
        authentication.currentUser.subscribe((user: User) => this.user = user);
    }

    connectUser(provider: Provider, role: EmployeeRole) {
        let connection: Connection = new Connection();
        connection.role = role;
        connection.provider = provider;
        connection.status = ConnectionStatus.Pending;
        (this.user.connections = this.user.connections || []).push(connection);
        this.authentication.update(this.user);
        return connection;
    }

    getUsers(): Observable<User[]> {
        return this.http.get('/api/users')
            .map((r: Response) => r.json());
    }

    updateUser(user: User) {
        return this.http.put(`/api/users/${user.id}`, JSON.stringify(user))
            .map((r: Response) => r.json());
    }

    registerUser(registration: Registration) {
        return this.http.post('/api/users', registration)
            .map((r: Response) => r.json());
    }


}
