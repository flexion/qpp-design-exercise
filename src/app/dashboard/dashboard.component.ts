import {Component, OnInit} from '@angular/core';

import {Provider} from '../_models/provider';
import {Authentication} from '../_services/authentication';
import {User} from '../_models/user';
import {UsersService} from '../_services/users.service';
import {EmployeeRole, ConnectionStatus} from '../_models/surrogate';
import {Subscribable} from 'rxjs/Observable';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    currentUser: Subscribable<User>;

  //  currentUser: User;
    roles: EmployeeRole;
    error: string;
    status: ConnectionStatus;

    getRoleName(role) {
        return role ? EmployeeRole[role] : '';
    }

    getConnectionStatus(status){
        return status ? ConnectionStatus[status] : 'pending';
    }

    constructor(private auth: Authentication,
                private usersService: UsersService) {
    }

    ngOnInit() {
        this.currentUser = this.auth.currentUser;

        this.auth.currentUser.subscribe(
            (user: User) => {
                if(!user.dashboard_landings){
                    user.dashboard_landings = 0;
                }
                user.dashboard_landings += 1;
                this.usersService.updateUser(user)
                    .subscribe(
                        () => {
                            console.log('success');
                        },
                        (e: any) => this.error = 'Error updating'
                    );
                console.log('dashboard user', user);
            });

    }

}
