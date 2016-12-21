import {Component, OnInit} from '@angular/core';

import {Provider} from '../_models/provider';
import {Authentication} from '../_services/authentication';
import {User} from '../_models/user';
import {EmployeeRole, ConnectionStatus} from '../_models/surrogate';
import {Subscribable} from 'rxjs/Observable';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    currentUser: Subscribable<User>;

    roles: EmployeeRole;
    status: ConnectionStatus;
    accessNumber = 1;
    showFirstAccess = true;

    getRoleName(role) {
        return role ? EmployeeRole[role] : '';
    }

    constructor(private auth: Authentication) {
    }

    ngOnInit() {
        this.currentUser = this.auth.currentUser;
        this.auth.currentUser.subscribe(
            (user: User) => {
                console.log('dashboard user', user);
            });

        if(this.accessNumber == 1){
            this.showFirstAccess = true;
            this.accessNumber = 2;
        }else{
            this.showFirstAccess = false;
        }

    }

}
