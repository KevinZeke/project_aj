import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSsonComponent } from './test-sson.component';

describe('TestSsonComponent', () => {
  let component: TestSsonComponent;
  let fixture: ComponentFixture<TestSsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
