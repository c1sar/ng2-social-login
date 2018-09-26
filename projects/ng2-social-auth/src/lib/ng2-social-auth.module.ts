// Angular
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

// Models
import { IGoogleConfig } from './models/IGoogleConfig';
import { IFacebookConfig } from './models/IFacebookConfig';
import { IProvidersConfig } from './models/IProvidersConfig';
import { CONFIG } from './models/config-injection-token';


@NgModule({
})
export class Ng2SocialAuthModule {
  static init(google: IGoogleConfig, facebook: IFacebookConfig): ModuleWithProviders {

    const config: IProvidersConfig = {
      facebook: facebook,
      google: google
    };

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
