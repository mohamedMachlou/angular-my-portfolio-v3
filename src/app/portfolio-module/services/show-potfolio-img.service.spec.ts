import { TestBed } from '@angular/core/testing';

import { ShowPotfolioImgService } from './show-potfolio-img.service';

describe('ShowPotfolioImgService', () => {
  let service: ShowPotfolioImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPotfolioImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
