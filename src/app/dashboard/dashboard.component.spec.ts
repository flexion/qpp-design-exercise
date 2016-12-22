/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {Authentication} from '../_services/authentication';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../_models/user';
import {Observable} from 'rxjs';
import {AuthenticationStub} from '../../testing/authentication.stub';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
                declarations: [DashboardComponent],
                providers: [{provide: Authentication, useClass: AuthenticationStub}],
                imports: [RouterTestingModule]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
