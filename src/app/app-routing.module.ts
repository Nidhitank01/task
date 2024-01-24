import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'employee',component:EmployeeComponent},
    {path:'company',component:CompanyComponent},
    {path:'branches',component:BranchComponent},
    
]},
{path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
