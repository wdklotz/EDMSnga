import { NgModule }           from '@angular/core';

import { BrowserModule }      from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }       from './app.component';
import { SummaryComponent }   from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { StocksService }      from './services/stocks.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
