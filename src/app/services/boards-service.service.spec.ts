import { TestBed } from '@angular/core/testing';

import { BoardsServiceService } from './boards-service.service';

describe('BoardsServiceService', () => {
  let service: BoardsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
