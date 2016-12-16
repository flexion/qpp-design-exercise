import {Component, OnInit} from '@angular/core';
import {Authentication} from "./authentication";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Authentication]
})
export class AppComponent implements OnInit {
    title = 'app works!';

    constructor(private authentication: Authentication) {
    }

    loggedInAs(): string {
        return this.authentication.getToken();
    }

    ngOnInit() {
    }
}
