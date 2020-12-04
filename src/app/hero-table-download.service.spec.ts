import { TestBed } from '@angular/core/testing';

import { HeroTableDownloadService } from './hero-table-download.service';

describe('HeroTableDownloadService', () => {
  let service: HeroTableDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroTableDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
