import {Component, OnInit, Input} from '@angular/core';

import {User} from '../_models/user';
import {UsersService} from '../_services/users.service';
import {Authentication} from '../_services/authentication';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    @Input()
    user: User;
    error: string;
    redirect: string;

    constructor(private usersService: UsersService,
                private authentication: Authentication,
                private router: Router) {
    }


    onSubmit() {
        // if submitting profile for the first time, redirect back to the steps page.
        if (this.user.step === 'profile') {
            this.user.step = 'connect';
            this.redirect = '/steps';
            // Otherwise redirect to the dashboard.
        } else {
            this.redirect = '/dashboard';
        }
        this.usersService.updateUser(this.user)
            .subscribe(
                () => {
                    console.log('success');
                    // this.router.navigate(['/dashboard']);
                    this.router.navigate([this.redirect]);
                },
                (e: any) => this.error = 'Error updating'
            );
    }


    ngOnInit() {
        this.authentication.currentUser.subscribe(
            (user: User) => {
                this.user = user;
            });
    }

}
