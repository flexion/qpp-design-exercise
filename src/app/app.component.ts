import {Component, OnInit} from '@angular/core';
import {Authentication} from "./authentication";
import {User} from "./user";

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

    loggedInAs(): string {
        return this.authentication.getToken();
    }

    ngOnInit():void {
        this.authentication.currentUser.subscribe(
            (user: User) => {
                this.currentUser = user;
            });
    }
}
