import {Component, OnInit} from '@angular/core';
import {Authentication} from '../authentication';
import {Router} from '@angular/router';

@Component({
    /*  selector: 'app-login', */
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    error: string;
    model: any = {};

    login(): void {
        this.authentication.login(this.model.username, this.model.password).subscribe(result => {
            if (result) {
                this.router.navigate(['/steps']);
            } else {
                this.router.navigate(['']);
            }
        });
    }

    constructor(private authentication: Authentication, private router: Router) {
    }

    ngOnInit() {
        this.authentication.logout();
    }

}
