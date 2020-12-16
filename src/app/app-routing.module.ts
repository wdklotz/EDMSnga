import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { EditComponent }        from './components/edit/edit.component';

const routes: Routes = [
  { path: '',     component: DashboardComponent },
  { path: 'edit', component: EditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
