import { NgModule }           from '@angular/core';

import { BrowserModule }      from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }        from '@angular/forms';

import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { DocService }             from './services/doc.service';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { SimpletableComponent }   from './components/simpletable/simpletable.component';
import { EditComponent }          from './components/edit/edit.component';
import { CompleteTableComponent } from './components/complete-table/complete-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent,
    SimpletableComponent,
    CompleteTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
