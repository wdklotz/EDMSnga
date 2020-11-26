import { TestBed }    from '@angular/core/testing';

import { DocService } from './doc.service';

describe('StocksService', () => {
  let service: DocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
