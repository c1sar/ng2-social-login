import { Injectable, Inject } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';

// Providers
import { SocialProvider } from './providers/social-provider';
import { FacebookProvider } from './providers/facebook-provider';
import { GoogleProvider } from './providers/google-provider';

// Models
import { IProvidersConfig } from './models/IProvidersConfig';
import { CONFIG } from './models/config-injection-token';
import { ProviderType } from './models/provider-type.enum';
import { IFacebookConfig } from './models/IFacebookConfig';
import { IGoogleConfig } from './models/IGoogleConfig';
import { ISocialUser } from './models/ISocialUser';

@Injectable({
  providedIn: 'root'
})
export class Ng2SocialAuthService {

  private readonly providers: { [providerId: string]: SocialProvider } = {};
  private currentProvider: ProviderType;

  constructor(
    @Inject(CONFIG) config: IProvidersConfig) {
    this.providers = Object.keys(config).reduce((obj: Object, providerId: string) => {
      const provider = ProviderType[providerId.toUpperCase()];
      obj[provider] = this.socialProviderFactory(provider, config[providerId]);
      return obj;
    }, {});
  }

  login(provider: ProviderType): Observable<ISocialUser> {
    this.currentProvider = provider;
    const socialProvider = this.providers[provider];
    return socialProvider ? socialProvider.login() : EMPTY;
  }

  logout(): Observable<any> {
    const socialProvider = this.providers[this.currentProvider];
    return socialProvider ? socialProvider.logout() : EMPTY;
  }

  private socialProviderFactory(provider: ProviderType, config: IFacebookConfig | IGoogleConfig): SocialProvider {
    switch (provider) {
      case ProviderType.FACEBOOK:
        return new FacebookProvider(config as IFacebookConfig);
      case ProviderType.GOOGLE:
        return new GoogleProvider(config as IGoogleConfig);
    }
  }
}
