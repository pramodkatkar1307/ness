import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ReportComponent } from './components/report/report.component';
import { ViewVisitorsComponent } from './components/view-visitors/view-visitors.component';


const routes: Routes = [
  { path: '', component: AdminLoginComponent }, //http://localhost:4200/admin
  { path:'report', component:ReportComponent}, //http://localhost:4200/admin/report
  { path:'visitors', component:ViewVisitorsComponent} //http://localhost:4200/admin/visitors
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
