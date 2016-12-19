import {Component, OnInit} from '@angular/core';
import {Authentication} from './_services/authentication';
import {User} from './_models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Authentication]
})
export class AppComponent implements OnInit {
    title = 'app works!';
    currentUser: User;

    constructor(private authentication: Authentication) {
    }

    ngOnInit() {
        this.authentication.currentUser.subscribe(
            (user: User) => {
                this.currentUser = user;
            });
    }
}
