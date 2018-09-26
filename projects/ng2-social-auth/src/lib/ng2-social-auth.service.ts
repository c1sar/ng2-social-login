import { Injectable, Inject } from '@angular/core';
import { IProvidersConfig } from './models/IProvidersConfig';
import { CONFIG } from './models/config-injection-token';

@Injectable({
  providedIn: 'root'
})
export class Ng2SocialAuthService {

  constructor(
    @Inject(CONFIG) config: IProvidersConfig) {
      console.log(Object.keys(config));
  }
}
