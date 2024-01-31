import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';

import { CanActivate, canActivate, } from './Services/auth-gaurd.service';
const routes: Routes = [
  {path:'',component:LoginComponent,},
  {path:'signup',component:SignupComponent},
  // {path:'home/:user',component:HomeComponent},
  {path:'home/:user',component:HomeComponent,children:[
    {path:'employee',component:EmployeeComponent,data:{Permissions:["SuperAdmin","Admin","baseUser"]},canActivate:[canActivate]},
    {path:'company',component:CompanyComponent,data:{Permissions:["Admin","SuperAdmin"]},canActivate:[canActivate]},
    {path:'branches',component:BranchComponent,data:{Permissions:["SuperAdmin"]},canActivate:[canActivate]},   
],canActivate:[CanActivate]},
{path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
