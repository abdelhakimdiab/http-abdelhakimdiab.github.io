import { TestBed, inject } from '@angular/core/testing';

import { LocalFlatDatabaseService } from './local-flat-database.service';

describe('LocalFlatDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalFlatDatabaseService]
    });
  });

  it('should be created', inject([LocalFlatDatabaseService], (service: LocalFlatDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
