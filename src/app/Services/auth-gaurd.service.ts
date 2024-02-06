import { inject } from "@angular/core"
import { LoginService } from "./login.service"
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn,  Router } from "@angular/router"
import { EmployeeService } from "./employee.service"
import { CompanyService } from "./company.service"
import { BranchService } from "./branch.service"
import { Employee } from "../Model/Employee.Model"

export const CanActivate: CanActivateFn = () => {
  const LService = inject(LoginService)
  const RSerivce = inject(Router)
  const route = inject(ActivatedRoute)
  let access = LService.getAccess()

  if (access === 'allowed') {
    return true;
  }
  else {
    RSerivce.navigate(['/'])
    return false;
  }

}
export const canActivate: CanActivateFn = (
  next: ActivatedRouteSnapshot,
) => {
  const LService = inject(LoginService)
  const RSerivce = inject(Router)
  // let route=inject(ActivatedRouteSnapshot)

  let permission: string[] = []
  permission = next.data['Permissions']
  let uType = JSON.parse(sessionStorage.getItem('User')).role

  console.log(uType)

  if (permission.includes(uType)) {
    return true;
  }
  else {
    alert('not allowed')
    return false
  }
}


// export const canDeactivate = () => {
//   const eService = inject(EmployeeService)
//   let formData: Employee
//   if (!eService.isSubmit) {
//         if (confirm('do you want to save changes!')) {
//           // debugger
//           eService.AddEmployeeFormFilled.subscribe(value => {
//             // debugger
//             console.log(value)
//             return true
//           })
//         }
//         else {
//           return false
//         }
//         return true
//       }

//   else{
//     return false
//   }
// }



export const resolveEmployee = () => {
  const eService = inject(EmployeeService)
  debugger
  return eService.getEmployeeList()
}
export const resolveCompany = () => {
  const cService = inject(CompanyService)
  return cService.getCompanyList()
}
export const resolveBranch = () => {
  const bService = inject(BranchService)
  return bService.getBranchList()
}
export const resolveUser = () => {
  const uService = inject(LoginService);
  return uService.AllLoginData
}