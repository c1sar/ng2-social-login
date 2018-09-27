// Angular
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

// Providers
import { SocialProvider } from './social-provider';

// Models
import { IGoogleConfig } from '../models/IGoogleConfig';
import { ProviderType } from '../models/provider-type.enum';
import { ISocialUser } from '../models/ISocialUser';

declare const gapi: any;

export class GoogleProvider extends SocialProvider {

  private googleAuth: any;

  constructor(private config: IGoogleConfig) {
    super(ProviderType.GOOGLE, '//apis.google.com/js/platform.js', () => {
      gapi.load('auth2', () => {
        const conf = {
          client_id: this.config.clientId,
          cookiepolicy: this.config.cookiePolicy,
          scope: this.config.scope
        };
        gapi.auth2.init(conf).then(auth => this.googleAuth = auth);
      });
    });
  }

  login(): Observable<ISocialUser> {
    return from(this.googleAuth.signIn({ prompt: 'select_account' })).pipe(
      map(() => {
        const profile = this.googleAuth.currentUser.get().getBasicProfile();
        const accessToken = this.googleAuth.currentUser.get().getAuthResponse(true).access_token;
        const idToken = this.googleAuth.currentUser.get().getAuthResponse(true).id_token;

        return {
          id: profile.getId(),
          email: profile.getEmail(),
          name: profile.getName(),
          profileImg: profile.getImageUrl(),
          accessToken: accessToken,
          idToken: idToken
        } as ISocialUser;
      })
    );
  }

  logout(): Observable<any> {
    return Observable.create(observer => observer.complete(this.googleAuth.signOut()));
  }

}
