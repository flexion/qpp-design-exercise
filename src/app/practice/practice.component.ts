import {Component, OnInit, Input} from '@angular/core';
import {Provider} from '../_models/provider';
import {PracticesService} from '../_services/practices.service';
import {SurrogateFunction} from '../_models/surrogate';
import {Observable} from 'rxjs';
import {ConnectionsService} from '../_services/connections.service';
import {Connection, EmployeeRole} from '../_models/surrogate';
import {Router} from '@angular/router';
import {Authentication} from '../_services/authentication';
import {User} from '../_models/user';
import {UsersService} from "../_services/users.service";

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {

    connected = false;
    providers; // Observable<Provider>;

    @Input()
    user: User;
    connection: Connection;

    roles = ['- Choose Role -', 'Authorized Official', 'Surrogate'];
    rolesEnum = EmployeeRole;

    model: any = {
        status: 0,
        role: 0,
        npi: '',
    };

    search() {
        console.log(this.model.query);
        this.practicesService.getPractices()
            .subscribe(providers => this.providers = providers);
    }


    connect(provider, type) {
        this.connected = true;
        console.log(this.model);
        this.connectionsService.connectUser(provider, type);
        this.router.navigate(['/dashboard']);
    }

    constructor(
                private connectionsService: ConnectionsService,
                private practicesService: PracticesService,
                private authentication: Authentication,
                private router: Router) {
    }

    ngOnInit() {
        this.authentication.currentUser.subscribe((user: User) => {
            this.user = user;
        });
    }

}
