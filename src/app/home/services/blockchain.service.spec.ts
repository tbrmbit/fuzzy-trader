import { TestBed } from '@angular/core/testing';

import { BlockchainService } from './blockchain.service';
import { HttpClientModule } from '@angular/common/http';

describe('BlockchainService', () => {
  let service: BlockchainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BlockchainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
