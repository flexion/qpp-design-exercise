import {Component, OnInit, Input} from '@angular/core';
import {Provider} from '../_models/provider';
import {ConnectionsService} from '../_services/connections.service';
import {Connection, EmployeeRole} from '../_models/surrogate';
import {Router} from '@angular/router';
import {Authentication} from '../_services/authentication';
import {User} from '../_models/user';
import {Observable} from 'rxjs';

//noinspection TsLint
@Component({
    selector: '[app-provider-connection]',
    templateUrl: './provider-connection.component.html'
})

export class ProviderConnectionComponent implements OnInit {

    @Input()
    provider: Provider;
    user: User;
    connection: Connection;

    roles = ['- Choose Role -', 'Authorized Official', 'Surrogate'];
    rolesEnum = EmployeeRole;

    model: any = {
        status: 0,
        role: 0,
        npi: '',
    };


    connect(provider, type) {
        console.log(this.model);
        this.connectionsService.connectUser(this.provider, type);
        this.router.navigate(['/dashboard']);
    }

    constructor(private connectionsService: ConnectionsService,
                private authentication: Authentication,
                private router: Router) {
    }

    ngOnInit() {
        this.authentication.currentUser.subscribe((user: User) => {
            this.user = user;
        });
    }

}
