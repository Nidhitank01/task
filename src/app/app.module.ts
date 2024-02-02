import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EmployeeService } from './Services/employee.service';
import { FavoriteCompanyListComponent } from './components/home/favorite-company-list/favorite-company-list.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    CompanyComponent,
    BranchComponent,
    HomeComponent,
    SignupComponent,
    AddEmployeeComponent,
    FavoriteCompanyListComponent,

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   AppRoutingModule,
   ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
