import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';



const oktaAuth = new OktaAuth({
  issuer: 'https://dev-02198142.okta.com/oauth2/default',
  clientId: '0oa5647pumjwLIels5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
});

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: { oktaAuth } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
