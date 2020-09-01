import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ReportComponent } from './components/report/report.component';
import { ViewVisitorsComponent } from './components/view-visitors/view-visitors.component';


@NgModule({
  declarations: [
    AdminLoginComponent, 
    ReportComponent, 
    ViewVisitorsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
