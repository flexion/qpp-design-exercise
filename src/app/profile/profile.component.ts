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

    constructor(private usersService: UsersService,
                private authentication: Authentication,
                private router: Router) {
    }


    onSubmit() {
        this.usersService.updateUser(this.user)
            .subscribe(
                () => {
                    console.log('success');
                    this.router.navigate(['/dashboard']);
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
