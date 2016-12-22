import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, BaseRequestOptions} from '@angular/http';
import {RouterModule, Routes, Route} from '@angular/router';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {AppComponent} from './app.component';
import {UsaOfficalComponent} from './usa-offical/usa-offical.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {Authentication} from './_services/authentication';
import {AuthGuard} from './guard/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StepsComponent} from './steps/steps.component';
import {PracticeComponent} from './practice/practice.component';
import {PracticesService} from './_services/practices.service';
import {fakeBackendProvider} from './_services/fake-backend';
import {UsersService} from './_services/users.service';
import { ProviderConnectionComponent } from './provider-connection/provider-connection.component';
import {ProviderSearchListComponent} from './provider-connection/provider-search-list';
import {ConnectionsService} from './_services/connections.service';
import {ProviderConnectionRoleComponent} from './provider-connection/provider-connection-role';
import {AppRoutingModule} from './app-routing.module';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'steps', component: StepsComponent, canActivate: [AuthGuard]},
    {path: 'practice', component: PracticeComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'steps'}
];

@NgModule({
    declarations: [
        AppComponent,
        UsaOfficalComponent,
        LoginComponent,
        RegistrationComponent,
        ProfileComponent,
        DashboardComponent,
        StepsComponent,
        PracticeComponent,
        ProviderConnectionComponent,
        ProviderSearchListComponent,
        ProviderConnectionRoleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
//        RouterModule.forRoot(appRoutes)
        AppRoutingModule
    ],
    providers: [
        Authentication,
        UsersService,
        ConnectionsService,
        PracticesService,
        AuthGuard,
        PracticesService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
