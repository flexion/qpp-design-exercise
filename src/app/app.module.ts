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
import {ClearProfileComponent} from './profile/clear-profile.component';
import {Authentication} from './_services/authentication';
import {AuthGuard} from './guard/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StepsComponent} from './steps/steps.component';
import {PracticeComponent} from './practice/practice.component';
import {PracticesService} from './_services/practices.service';
import {fakeBackendProvider} from './_services/fake-backend';
import {UsersService} from './_services/users.service';
import {ConnectionsService} from './_services/connections.service';
import {AppRoutingModule} from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {environment} from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
        UsaOfficalComponent,
        LoginComponent,
        RegistrationComponent,
        ProfileComponent,
        ClearProfileComponent,
        DashboardComponent,
        StepsComponent,
        PracticeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
        BaseRequestOptions,
        {provide: APP_BASE_HREF, useValue: environment.baseUrl}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
