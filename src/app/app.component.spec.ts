/* tslint:disable:no-unused-variable */
import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {UsaOfficalComponent} from './usa-offical/usa-offical.component';
import {RouterOutlet} from '@angular/router';
import {Authentication} from './_services/authentication';
import {UsersService} from './_services/users.service';
import {ConnectionsService} from './_services/connections.service';
import {PracticesService} from './_services/practices.service';
import {AuthGuard} from './guard/auth.guard';
import {fakeBackendProvider} from './_services/fake-backend';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, XHRBackend, HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {ProviderConnectionRoleComponent} from './provider-connection/provider-connection-role';
import {ProviderSearchListComponent} from './provider-connection/provider-search-list';
import {ProviderConnectionComponent} from './provider-connection/provider-connection.component';
import {PracticeComponent} from './practice/practice.component';
import {StepsComponent} from './steps/steps.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ClearProfileComponent} from './profile/clear-profile.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
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
                ProviderConnectionRoleComponent,
                ClearProfileComponent
            ],
            imports: [AppRoutingModule, FormsModule, HttpModule],
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
                XHRBackend
            ]
        });
        TestBed.compileComponents();
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    /*
     it(`should have as title 'app works!'`, async(() => {
     let fixture = TestBed.createComponent(AppComponent);
     let app = fixture.debugElement.componentInstance;
     expect(app.title).toEqual('app works!');
     }));

     it('should render title in a h1 tag', async(() => {
     let fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     let compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('h1').textContent).toContain('app works!');
     }));
     */
});
