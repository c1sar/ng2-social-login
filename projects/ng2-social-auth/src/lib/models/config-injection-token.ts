import { IProvidersConfig } from './IProvidersConfig';
import { InjectionToken } from '@angular/core';

export const CONFIG: InjectionToken<IProvidersConfig> = new InjectionToken<IProvidersConfig>('providers configuration');
