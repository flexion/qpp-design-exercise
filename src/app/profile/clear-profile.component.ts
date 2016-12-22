import {Component, OnInit, Input} from '@angular/core';

import {User} from '../_models/user';
import {UsersService} from '../_services/users.service';
import {Authentication} from '../_services/authentication';
import {Router} from '@angular/router';

@Component({
    selector: 'app-clear-profile',
    template:'<ng-content></ng-content><section class=\"usa-grid usa-section\"><h2>User data cleared</h2><p><a class=\"usa-button\" href=\"/login\">Login</a></p></section>'
})
export class ClearProfileComponent implements OnInit {

    @Input()
    user: User;
    error: string;
    redirect: string;

    constructor(private usersService: UsersService,
                private authentication: Authentication,
                private router: Router) {
    }


    ngOnInit() {
        this.authentication.currentUser.subscribe(
            (user: User) => {
                this.user = user;
                this.user.title = "";
                this.user.first_name = "";
                this.user.last_name = "";
                this.user.suffix = "";
                this.user.birth_day = "";
                this.user.birth_month = "";
                this.user.birth_year = "";
                this.user.company_name = "";
                this.user.company_title = "";
                this.user.address = "";
                this.user.address2 = "";
                this.user.city = "";
                this.user.state = "";
                this.user.zip = "";
                this.user.step = "profile";
                this.user.connections = [];
                this.user.dashboard_landings = 0;
                this.usersService.updateUser(this.user)
                    .subscribe(
                        () => {
                            console.log('success');
                         //   this.router.navigate(['/']);
                        },
                        (e: any) => this.error = 'Error updating'
                    );
            });
    }

}