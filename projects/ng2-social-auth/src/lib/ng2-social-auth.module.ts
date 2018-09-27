// Angular
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

// Models
import { CONFIG } from './models/config-injection-token';
import { IProvidersConfig } from './models/IProvidersConfig';


@NgModule({
})
export class Ng2SocialAuthModule {
  static init(config: IProvidersConfig): ModuleWithProviders {

    return {
      ngModule: Ng2SocialAuthModule,
      providers: [
        {
          provide: CONFIG,
          useValue: config
        }
      ]
    };
  }
}
