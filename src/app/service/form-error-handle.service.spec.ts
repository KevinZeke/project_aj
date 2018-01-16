import { TestBed, inject } from '@angular/core/testing';

import { FormErrorHandleService } from './form-error-handle.service';

describe('FormErrorHandleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormErrorHandleService]
    });
  });

  it('should be created', inject([FormErrorHandleService], (service: FormErrorHandleService) => {
    expect(service).toBeTruthy();
  }));
});
