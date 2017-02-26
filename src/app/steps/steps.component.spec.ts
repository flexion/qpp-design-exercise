/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StepsComponent } from './steps.component';
import {AuthenticationStub} from '../../testing/authentication.stub';
import {Authentication} from '../_services/authentication';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../_models/user';
import {Observable} from 'rxjs';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsComponent ],
      imports: [{provide: Authentication, useClass: AuthenticationStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

});
