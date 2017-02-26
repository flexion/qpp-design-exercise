/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../_models/user';
import {Observable} from 'rxjs';
import {Authentication} from '../_services/authentication';
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

    it('connection status should return Pending if no status is given', () =>{
        let status = component.getConnectionStatus(false);
        expect(status).toBe('Pending');
    });

    it('connection status of 1 should equal Approved', () =>{
        let status = component.getConnectionStatus(1);
        expect(status).toBe('Approved');
    });

    it('connection status of 2 should equal Rejected', () =>{
        let status = component.getConnectionStatus(2);
        expect(status).toBe('Rejected');
    });

    it('connection status of 3 should equal Canceled', () =>{
        let status = component.getConnectionStatus(3);
        expect(status).toBe('Canceled');
    });

    it('landings should return a number', () =>{
        let landings = component.getLandings();
        expect(landings).toBeGreaterThan(-1);
    });

    it('role 1 should be Authorized Official', () =>{
        let role = component.getRoleName(1);
        expect(role).toBe('Authorized Official');
    });

    it('role 2 should be Surrogate', () =>{
        let role = component.getRoleName(2);
        expect(role).toBe('Surrogate');
    });
});
