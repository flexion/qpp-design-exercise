import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UsaOfficalComponent} from './usa-offical/usa-offical.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {Authentication} from './authentication';
import {AuthGuard} from './guard/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StepsComponent} from './steps/steps.component';
import {PracticeComponent} from './practice/practice.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'steps', component: StepsComponent},
    {path: 'practice', component: PracticeComponent},
    {path: '*', redirectTo: 'profile'}
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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [Authentication, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
