import { TestBed } from '@angular/core/testing';

import { MyInterFaceService } from './my-inter-face.service';

describe('MyInterFaceService', () => {
  let service: MyInterFaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInterFaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
