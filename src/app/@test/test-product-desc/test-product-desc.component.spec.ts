import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProductDescComponent } from './test-product-desc.component';

describe('TestProductDescComponent', () => {
  let component: TestProductDescComponent;
  let fixture: ComponentFixture<TestProductDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestProductDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
