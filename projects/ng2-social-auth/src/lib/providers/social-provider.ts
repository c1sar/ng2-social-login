// Angular
import { Observable } from 'rxjs';

// Models
import { ProviderType, ISocialUser } from '../../public_api';

export abstract class SocialProvider {

  private readonly idPrefix: string = 'SocialProvider';

  constructor(provider: ProviderType, src: string, onload: () => void) {
    const idScript = `${this.idPrefix}-${provider}`;

    if (document.getElementById(idScript)) {
      return;
    }

    const script = document.createElement('script');
    script.id = idScript;
    script.src = src;
    script.async = true;
    script.onload = onload;
    document.head.appendChild(script);
  }

  abstract login(): Observable<ISocialUser>;

  abstract logout(): Observable<any>;

}
