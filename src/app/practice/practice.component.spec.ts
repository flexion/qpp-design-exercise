/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {PracticeComponent} from './practice.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Authentication} from '../_services/authentication';
import {AuthenticationStub} from '../../testing/authentication.stub';
import {ConnectionsService} from "../_services/connections.service";
import {UsersService} from "../_services/users.service";

describe('PracticeComponent', () => {
    let component: PracticeComponent;
    let fixture: ComponentFixture<PracticeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [PracticeComponent],
                providers: [
                    {provide: Authentication, useClass: AuthenticationStub},
                    ConnectionsService,
                    UsersService
                ],
                imports: [RouterTestingModule, FormsModule]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PracticeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*
    it('search should return providers', () => {
      let results = component.search();
        expect(results).toBeGreaterThan(0);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    */
});
