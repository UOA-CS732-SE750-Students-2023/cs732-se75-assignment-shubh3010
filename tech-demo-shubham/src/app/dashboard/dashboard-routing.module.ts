import { NgModule } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {MatTableDemoComponent} from './mat-table-demo/mat-table-demo.component'


// This is the routing array, It maps every path with a component. This path can be used to route

const routes: Routes = [
  {
    path: 'dashboard/chart',
    component: ChartsComponent
  },
  {
    path: 'dashboard/mat-table',
    component: MatTableDemoComponent
  },
  {
    // since the path is empty it will by default load below component
    path: '',
    component: DashboardHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }