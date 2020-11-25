import { NgModule }           from '@angular/core';

import { BrowserModule }      from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule }   from './app-routing.module';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';
import { SummaryComponent }   from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { StocksService }      from './services/stocks.service';
import { ManageComponent }    from './components/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
