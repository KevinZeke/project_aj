import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWarningComponent } from './form-warning.component';

describe('FormWarningComponent', () => {
  let component: FormWarningComponent;
  let fixture: ComponentFixture<FormWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
