import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2SocialAuthModule } from 'projects/ng2-social-auth/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2SocialAuthModule.init({ clientId: 'YOUR_CLIENT_ID' }, { appId: 'YOUR_APP_ID' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
