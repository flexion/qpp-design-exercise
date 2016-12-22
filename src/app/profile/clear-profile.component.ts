import {Component, OnInit, Input} from '@angular/core';

import {User} from '../_models/user';
import {UsersService} from '../_services/users.service';
import {Authentication} from '../_services/authentication';
import {Router} from '@angular/router';

@Component({
    selector: 'app-clear-profile',
    template: `<section class="usa-grid usa-section">
    <h2>User data cleared</h2>
    <p><a class="usa-button" href="/#/login">Login</a></p>
    </section>`
})
export class ClearProfileComponent implements OnInit {

    error: string;

    constructor(private usersService: UsersService,
                private authentication: Authentication,
                private router: Router) {
    }


    ngOnInit() {
        this.authentication.reset();
    //    this.authentication.logout();
    }

}