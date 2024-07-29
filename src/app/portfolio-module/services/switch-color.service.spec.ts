import { TestBed } from '@angular/core/testing';

import { SwitchColorService } from './switch-color.service';

describe('SwitchColorService', () => {
  let service: SwitchColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
