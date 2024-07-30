import { TestBed } from '@angular/core/testing';

import { ManageListsService } from './manage-lists.service';

describe('ManageListsService', () => {
  let service: ManageListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
