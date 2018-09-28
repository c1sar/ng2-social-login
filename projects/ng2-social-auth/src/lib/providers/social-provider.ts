// Angular
import { Observable } from 'rxjs';

// Models
import { IToken } from '../models/IToken';
import { ProviderType } from '../models/provider-type.enum';

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
    script.defer = true;
    document.head.appendChild(script);
  }

  abstract login(): Observable<IToken>;

  abstract logout(): Observable<any>;

}
