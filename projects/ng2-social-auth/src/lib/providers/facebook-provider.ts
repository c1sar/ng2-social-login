// Angular
import { Observable } from 'rxjs';

// Providers
import { SocialProvider } from './social-provider';

// Models
import { IFacebookConfig } from '../models/IFacebookConfig';
import { ProviderType } from '../models/provider-type.enum';
import { IToken } from '../models/IToken';

declare const FB: any;

export class FacebookProvider extends SocialProvider {


  constructor(private config: IFacebookConfig) {
    super(ProviderType.FACEBOOK, '//connect.facebook.net/en_US/sdk.js', () => {
      FB.init(this.config);
    });
  }

  login(): Observable<IToken> {
    return Observable.create(observer => {
      FB.login((res: any) => {
        if (res.authResponse) {
          const authResponse = res.authResponse;
          FB.api('/me?fields=name,email,picture,first_name,last_name', (fbUser: any) => {
            observer.next({
              token: authResponse.accessToken
            } as IToken);
          });
        }
      });
    });
  }

  logout(): Observable<any> {
    return Observable.create(observer => observer.next(FB.logout()));
  }
}
