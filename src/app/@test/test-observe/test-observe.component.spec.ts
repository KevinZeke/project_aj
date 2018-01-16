import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObserveComponent } from './test-observe.component';

describe('TestObserveComponent', () => {
  let component: TestObserveComponent;
  let fixture: ComponentFixture<TestObserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
