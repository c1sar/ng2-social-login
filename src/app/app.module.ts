import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2SocialAuthModule, IProvidersConfig } from 'projects/ng2-social-auth/src/public_api';


const config: IProvidersConfig = {
  google: {
    clientId: '68709191942-1rv2fjffj0bemb5hmf1ti71quv2o3otv.apps.googleusercontent.com',
    cookiePolicy: 'single_host_origin',
    scope: 'email profile https://www.googleapis.com/auth/contacts'
  },
  facebook: {
    appId: '2425997684292453',
    cookie: true,
    xfbml: true,
    version: 'v2.11'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2SocialAuthModule.init(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
