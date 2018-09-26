import { TestBed } from '@angular/core/testing';

import { Ng2SocialAuthService } from './ng2-social-auth.service';

describe('Ng2SocialAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng2SocialAuthService = TestBed.get(Ng2SocialAuthService);
    expect(service).toBeTruthy();
  });
});
