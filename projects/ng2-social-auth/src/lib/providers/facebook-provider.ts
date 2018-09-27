// Angular
import { Observable } from 'rxjs';

// Providers
import { SocialProvider } from './social-provider';

// Models
import { IFacebookConfig } from '../models/IFacebookConfig';
import { ProviderType } from '../models/provider-type.enum';
import { ISocialUser } from '../models/ISocialUser';

declare const FB: any;

export class FacebookProvider extends SocialProvider {


  constructor(private config: IFacebookConfig) {
    super(ProviderType.FACEBOOK, '//connect.facebook.net/en_US/sdk.js', () => {
      FB.init(this.config);
    });
  }

  login(): Observable<ISocialUser> {
    return Observable.create(observer => {
      FB.login((res: any) => {
        if (res.authResponse) {
          const authResponse = res.authResponse;
          FB.api('/me?fields=name,email,picture,first_name,last_name', (fbUser: any) => {
            observer.next({
              id: fbUser.id,
              name: fbUser.name,
              email: fbUser.email,
              profileImg: `https://graph.facebook.com/${fbUser.id}/picture?type=normal`,
              firstName: fbUser.first_name,
              lastName: fbUser.last_name,
              accessToken: authResponse.accessToken
            } as ISocialUser);
          });
        }
      });
    });
  }

  logout(): Observable<any> {
    return Observable.create(observer => observer.next(FB.logout()));
  }
}
