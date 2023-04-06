import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    // The components of this module are declared below
  declarations: [
    AppComponent
  ],

    // Below are the libraries we have imported this dashboard module
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
