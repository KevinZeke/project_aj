import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLife2Component } from './test-life-2.component';

describe('TestLife2Component', () => {
  let component: TestLife2Component;
  let fixture: ComponentFixture<TestLife2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLife2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLife2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
