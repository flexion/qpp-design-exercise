import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {ClearProfileComponent} from './profile/clear-profile.component';
import {AuthGuard} from './guard/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StepsComponent} from './steps/steps.component';
import {PracticeComponent} from './practice/practice.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'clear-profile', component: ClearProfileComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'steps', component: StepsComponent, canActivate: [AuthGuard]},
    {path: 'practice', component: PracticeComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '*', redirectTo: 'profile'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
