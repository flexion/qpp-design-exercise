import {Component, OnInit, Injectable} from '@angular/core';
import {Authentication} from './_services/authentication';
import {User} from './_models/user';
import {Subscriber} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
    title = 'app works!';
    currentUser: any;

    constructor(private authentication: Authentication) {
    }

    ngOnInit() {
        this.currentUser = this.authentication.currentUser;
    }
}
