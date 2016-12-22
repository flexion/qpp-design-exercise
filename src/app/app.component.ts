import {Component, OnInit, Injectable} from '@angular/core';
import {Authentication} from './_services/authentication';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
    currentUser: any;

    constructor(private authentication: Authentication, private router: Router) {
    }

    ngOnInit() {
        this.currentUser = this.authentication.currentUser;
    }
}
