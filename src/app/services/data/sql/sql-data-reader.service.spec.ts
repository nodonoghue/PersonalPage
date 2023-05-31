import { TestBed } from '@angular/core/testing';

import { SqlDataReaderService } from './sql-data-reader.service';

describe('SqlDataReaderService', () => {
  let service: SqlDataReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlDataReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
