import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAuxChatComponent } from './test-aux-chat.component';

describe('TestAuxChatComponent', () => {
  let component: TestAuxChatComponent;
  let fixture: ComponentFixture<TestAuxChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAuxChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAuxChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
