import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CanActivate, canActivate, resolveBranch, resolveCompany, resolveEmployee, } from './Services/auth-gaurd.service';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
const routes: Routes = [
  {path:'',component:LoginComponent,},
  {path:'signup',component:SignupComponent},
  // {path:'home/:user',component:HomeComponent},
  {path:'home/:user',component:HomeComponent,children:[
    {path:'employee',component:EmployeeComponent,
    data:{Permissions:["SuperAdmin","Admin","baseUser"]},
    canActivate:[canActivate],
    resolve:{employeeData:resolveEmployee},
    children:[{path:'add',component:AddEmployeeComponent}]},

    {path:'company',component:CompanyComponent,
    data:{Permissions:["Admin","SuperAdmin"]},canActivate:[canActivate],
  resolve:{companyData:resolveCompany}},

    {path:'branches',component:BranchComponent,
    data:{Permissions:["SuperAdmin"]},canActivate:[canActivate],
  resolve:{brancheData:resolveBranch}},   
],canActivate:[CanActivate]},
{path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
