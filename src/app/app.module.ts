import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    CompanyComponent,
    BranchComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
