import {Component, OnInit, Input} from '@angular/core';
import {Provider} from '../_models/provider';

@Component({
    selector: 'app-provider-connection',
    templateUrl: './provider-connection-role.html'
})

export class ProviderConnectionRoleComponent {

    @Input()
    provider: Provider;
}
