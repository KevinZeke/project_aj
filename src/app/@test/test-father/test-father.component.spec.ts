import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFatherComponent } from './test-father.component';

describe('TestFatherComponent', () => {
  let component: TestFatherComponent;
  let fixture: ComponentFixture<TestFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
