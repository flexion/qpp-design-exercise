import {Component, OnInit} from '@angular/core';

import {Authentication} from '../_services/authentication';
import {User} from '../_models/user';
import {EmployeeRole, ConnectionStatus} from '../_models/surrogate';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    static landings: number = 0;
    currentUser: Observable<User>;

    //  currentUser: User;
    roles: EmployeeRole;
    error: string;
    status: ConnectionStatus;

    getRoleName(role) {
        return role ? EmployeeRole[role] : '';
    }

    getConnectionStatus(status) {
        return status ? ConnectionStatus[status] : 'Pending';
    }

    constructor(private auth: Authentication) {

    }

    getLandings(): number {
        return DashboardComponent.landings;
    }

    ngOnInit() {
        DashboardComponent.landings += 1;
        this.currentUser = this.auth.getUser();
    }

}
