// Angular
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

// Providers
import { SocialProvider } from './social-provider';

// Models
import { IGoogleConfig } from '../models/IGoogleConfig';
import { ProviderType } from '../models/provider-type.enum';
import { IToken } from '../models/IToken';

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

  login(): Observable<IToken> {
    if (!this.googleAuth) {
      return new Observable(observer => {
        observer.error('Google Api No loaded!');
      });
    }
    return from(this.googleAuth.grantOfflineAccess()).pipe(
      map(authResult => {
        return { token: authResult['code'] };
      })
    );
  }

  logout(): Observable<any> {
    return Observable.create(observer => observer.complete(this.googleAuth.signOut()));
  }

}
