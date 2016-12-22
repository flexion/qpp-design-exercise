/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {RegistrationComponent} from './registration.component';
import {fakeBackendProvider} from '../_services/fake-backend';
import {UsersService} from '../_services/users.service';
import {FormsModule} from '@angular/forms';
import {Authentication} from '../_services/authentication';
import {AuthenticationStub} from '../../testing/authentication.stub';
import {RouterTestingModule} from '@angular/router/testing';
import {UsersServiceStub} from '../../testing/users.service.stub';

describe('RegistrationComponent', () => {
    let component: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [RegistrationComponent],
                providers: [
                    { provide: UsersService, useClass: UsersServiceStub },
                    { provide: Authentication, useClass: AuthenticationStub }
                    ],
                imports: [FormsModule, RouterTestingModule]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
