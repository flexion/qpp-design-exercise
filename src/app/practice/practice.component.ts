import {Component, OnInit} from '@angular/core';

import {Practice} from '../practice';

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

    search = false;
    connected = false;

    searched() {
        this.search = true;
    }

    connect() {
        this.connected = true;
    }

    practices: Practice[] = [
        new Practice(19, 'practice 3', '32234234234', ''),
        new Practice(18, 'practice 2', '32234234234', ''),
        new Practice(19, 'practice 3', '32234234234', ''),
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
