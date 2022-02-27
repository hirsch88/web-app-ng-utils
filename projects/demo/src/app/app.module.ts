import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { WebAppNgUtilsModule } from '@baloise/web-app-ng-utils';
import { WebAppNgUtilsModule } from '../../../baloise/web-app-ng-utils/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebAppNgUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
