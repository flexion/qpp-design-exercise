/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsaOfficalComponent } from './usa-offical.component';

describe('UsaOfficalComponent', () => {
  let component: UsaOfficalComponent;
  let fixture: ComponentFixture<UsaOfficalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaOfficalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaOfficalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
