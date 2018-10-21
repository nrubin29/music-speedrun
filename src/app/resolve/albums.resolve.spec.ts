import { TestBed, inject } from '@angular/core/testing';

import { AlbumsResolve } from './albums.resolve';

describe('AlbumsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsResolve]
    });
  });

  it('should be created', inject([AlbumsResolve], (service: AlbumsResolve) => {
    expect(service).toBeTruthy();
  }));
});
