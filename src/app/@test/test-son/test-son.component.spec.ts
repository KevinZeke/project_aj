import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSonComponent } from './test-son.component';

describe('TestSonComponent', () => {
  let component: TestSonComponent;
  let fixture: ComponentFixture<TestSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
