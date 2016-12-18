import {Component, OnInit} from '@angular/core';
import {Authentication} from '../authentication';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from "../user";

@Component({
    /*  selector: 'app-login', */
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    error: string;
    model: any = {};
    returnUrl: string;

    constructor(private authentication: Authentication,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'steps';
        this.authentication.logout();
    }

    login(): void {
        this.authentication.login(this.model.username, this.model.password).subscribe(
            (user: User) => {
                this.router.navigate([this.returnUrl]);
            },
            e => {
                console.log('error', e)
            },
            () => {
                console.log('complete?');
            }
        );
        return null;
    }

}
