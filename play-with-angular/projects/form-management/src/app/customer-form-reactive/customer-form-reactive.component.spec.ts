import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormReactiveComponent } from './customer-form-reactive.component';

describe('CustomerFormReactiveComponent', () => {
  let component: CustomerFormReactiveComponent;
  let fixture: ComponentFixture<CustomerFormReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerFormReactiveComponent]
    });
    fixture = TestBed.createComponent(CustomerFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
