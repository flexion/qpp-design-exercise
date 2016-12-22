/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {Authentication} from '../_services/authentication';
import {AuthenticationStub} from '../../testing/authentication.stub';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [LoginComponent],
                imports: [FormsModule, RouterTestingModule],
                providers: [{provide: Authentication, useClass: AuthenticationStub}],
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
