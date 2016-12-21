import {Provider} from '../_models/provider';
import {Component, Input} from '@angular/core';
/*
import { Component, Input, ViewChild, ViewContainerRef, ComponentFactory, ComponentResolver } from '@angular/core';
import { DynamicBuilder } from './app/dynamic.component'
import { timer } from 'rxjs/observable/timer';
*/

@Component({
    selector: 'app-provider-search-list', // app-provider-search-list',
    templateUrl: './provider-search-list.html'
})

export class ProviderSearchListComponent {

    @Input()
    providers: Provider[];
}
