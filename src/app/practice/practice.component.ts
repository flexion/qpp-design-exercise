import {Component, OnInit} from '@angular/core';
import {Provider} from '../_models/provider';
import {PracticesService} from '../_services/practices.service';
import {SurrogateFunction} from '../_models/surrogate';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

    connected = false;
    providers; // Observable<Provider>;

    model = {
        query: ''
    };

    search() {
        console.log(this.model.query);
        this.practicesService.getPractices()
            .subscribe(providers => this.providers = providers);
    }

    connect() {
        this.connected = true;
    }

    constructor(private practicesService: PracticesService) {
    }

    ngOnInit() {
    }


}
