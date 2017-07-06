import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ResultsModule } from './results/results.module';
import {
  ApiService,
  UserService,
  SearchService,
  SharedModule,
  FooterComponent,
  HeaderComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SharedModule,
    HomeModule,
    ResultsModule,
    rootRouting
  ],
  providers: [
    ApiService,
    UserService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
