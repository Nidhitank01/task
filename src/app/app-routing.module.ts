import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CanActivate, canActivate, resolveBranch, resolveCompany, resolveEmployee, resolveUser, } from './Services/auth-gaurd.service';
import { AddComponent } from './components/add/add.component';
import { FavoriteCompanyListComponent } from './components/home/favorite-company-list/favorite-company-list.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home/:user',component:HomeComponent},
  {path:'home/:user',component:HomeComponent,
          children:[
                  {path:'favList',component:FavoriteCompanyListComponent},
                    {path:'employee',component:EmployeeComponent,pathMatch:'full',
                    data:{Permissions:["SuperAdmin","Admin","baseUser"],route:'employee'},
                    canActivate:[canActivate],
                    resolve:{employeeData:resolveEmployee},
        
                  },
                  {path:'employee/add',component:AddComponent,pathMatch:'full'},
                  {path:'company/add',component:AddComponent,pathMatch:'full'},
                  {path:'branches/add',component:AddComponent,pathMatch:'full'},

                    {path:'company',component:CompanyComponent,pathMatch:'full',
                    data:{Permissions:["Admin","SuperAdmin"],route:'company'},canActivate:[canActivate],
                  resolve:{companyData:resolveCompany}},

                    {path:'branches',component:BranchComponent,pathMatch:'full',
                    data:{Permissions:["SuperAdmin"],route:'branches'},canActivate:[canActivate],
                  resolve:{branchData:resolveBranch}},   

                ],canActivate:[CanActivate]
    
    },
      {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
