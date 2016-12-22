/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ProviderConnectionComponent} from './provider-connection.component';
import {FormsModule} from '@angular/forms';

describe('ProviderConnectionComponent', () => {
    let component: ProviderConnectionComponent;
    let fixture: ComponentFixture<ProviderConnectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ProviderConnectionComponent],
                imports: [FormsModule]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProviderConnectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
