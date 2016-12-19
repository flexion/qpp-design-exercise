import {Component, OnInit} from '@angular/core';

import {Practice} from '../_models/practice';
import {Authentication} from '../_services/authentication';
import {PracticesService} from '../_services/practices.service';
import {User} from '../_models/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    currentUser: User;
    practices;
    /*
    practices = [
        new Practice(18, 'practice 2', '32234234234', 'pending'),
        new Practice(19, 'practice 3', '32234234234', 'approved'),
    ];
    */

    constructor(private auth: Authentication,
                private practicesService: PracticesService) {
    }

    ngOnInit() {
        this.auth.currentUser.subscribe(
            (user: User) => {
                this.currentUser = user;
            });
        this.practices = this.practicesService.getPractices();
    }

}
