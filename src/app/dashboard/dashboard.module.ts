import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
import { MatTableDemoComponent } from './mat-table-demo/mat-table-demo.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatInputModule } from '@angular/material/input';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  // The components of this module are declared below
  declarations: [
    ChartsComponent,
    MatTableDemoComponent,
    DashboardHomeComponent
  ],

  // Below are the libraries we have imported this dashboard module
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    NgChartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
