import {Component, OnInit} from '@angular/core';
import {Practice} from '../_models/practice';
import {PracticesService} from '../_services/practices.service';

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

    search = false;
    connected = false;
    practices;
    practicesService: PracticesService;

    searched() {
        this.search = true;
    }

    connect() {
        this.connected = true;
    }

    constructor(practicesService: PracticesService) {
        this.practicesService = practicesService;
    }

    ngOnInit() {
        this.practicesService.getPractices()
            .subscribe(
                practices => {
                    this.practices = practices;
                    console.log('practices received', practices);
                },
                error => console.log('error fetching practices')
            );
    }

}
