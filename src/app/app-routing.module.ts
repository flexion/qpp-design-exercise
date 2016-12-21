import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './guard/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StepsComponent} from './steps/steps.component';
import {PracticeComponent} from './practice/practice.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'steps', component: StepsComponent, canActivate: [AuthGuard]},
    {path: 'practice', component: PracticeComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'profile'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
