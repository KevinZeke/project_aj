import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSellerInfoComponent } from './test-seller-info.component';

describe('TestSellerInfoComponent', () => {
  let component: TestSellerInfoComponent;
  let fixture: ComponentFixture<TestSellerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSellerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSellerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
