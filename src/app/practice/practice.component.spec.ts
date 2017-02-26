/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {PracticeComponent} from './practice.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('PracticeComponent', () => {
    let component: PracticeComponent;
    let fixture: ComponentFixture<PracticeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [PracticeComponent],
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
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    */
});
