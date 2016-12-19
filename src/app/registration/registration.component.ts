import {Component, OnInit} from '@angular/core';
import {UsersService} from '../_services/users.service';
import {Registration} from '../_models/registration';
import {Authentication} from '../_services/authentication';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    registration: Registration = new Registration();
    error: string;

    constructor(private usersService: UsersService,
                private authentication: Authentication,
                private router: Router) {
    }

    register() {
        this.usersService.registerUser(this.registration).subscribe(
            () => {
                // login on successful registration
                this.authentication.login(this.registration.email, this.registration.password);
                this.router.navigate(['/profile']);
            },
            e => {
                this.error = e;
                console.log('error', e);
            });
    }

    ngOnInit() {
    }

}
