import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddVisitorComponent } from './components/add-visitor/add-visitor.component';
import { EditVisitorComponent } from './components/edit-visitor/edit-visitor.component';
import { VisitorDataGuard } from './resolvers/visitor-data.guard';
import { ConfirmGuard } from './guards/confirm.guard';


const routes: Routes = [
  { path:"", pathMatch:"full",  component:HomeComponent},  //http://localhost:4200/
  { path:"about",  component:AboutComponent},              //http://localhost:4200/about
  { 
    path:"newvisitor", 
    component:AddVisitorComponent,
    canDeactivate:[ConfirmGuard]
  },     
  { 
    path:"editvisitor/:id", 
    component:EditVisitorComponent,
    resolve:{
      visitor:VisitorDataGuard      
    }
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
