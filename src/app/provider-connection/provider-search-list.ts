import {Provider} from '../_models/provider';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-provider-search-list',
    templateUrl: './provider-search-list.html'
})

export class ProviderSearchListComponent {

    @Input() providers: Provider[];
}
