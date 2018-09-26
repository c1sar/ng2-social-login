import { IFacebookConfig } from './IFacebookConfig';
import { IGoogleConfig } from './IGoogleConfig';

export interface IProvidersConfig {
  facebook: IFacebookConfig;
  google: IGoogleConfig;
}
