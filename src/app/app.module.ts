import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { AppRoutingModule }       from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocInterfaceDisplayComponent } from './components/docinterface-display/docinterface-display.component'
import { DocService } from './services/doc.service';
import { SimpletableComponent } from './components/simpletable/simpletable.component';
import { CompleteTableComponent } from './components/complete-table/complete-table.component';
// import { EditComponent }          from './components/edit/edit.component';
// import { PaginationComponent }    from './components/pagination/pagination.component';

// NgModule? https://angular.io/api/core/NgModule
// Decorator that marks class as a NgModule (supplies configuration metadata):
@NgModule({
  // list of components, directives, and pipes (declarables) that belong to this module. 
  declarations: [
    AppComponent,
    DashboardComponent,
    DocInterfaceDisplayComponent,
    SimpletableComponent,
    CompleteTableComponent,
    // EditComponent,
    // PaginationComponent,
  ],
  imports: [
    // list of  NgModules whose exported declarables are available to this module.
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    // AppRoutingModule,
  ],
  // DI: Providers are responsible for creating the instanceof the object requested
  // Anything that has been registered with an NgModule’s providers array 
  // is available to be injected in your application code
  providers: [DocService],
  // list of components that are bootstrapped when this module is bootstrapped
  bootstrap: [AppComponent]
})
// empty class acts as the vessel for storing the data
export class AppModule { }
