import { inject } from "@angular/core"
import { LoginService } from "./login.service"
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ROUTES, Router } from "@angular/router"

export const CanActivate:CanActivateFn = () => {
  const LService = inject(LoginService)
  const RSerivce=inject(Router)
  const route=inject(ActivatedRoute)
  let access = LService.getAccess()

  if(access==='allowed'){ 
    return true;
  }
  else{
    RSerivce.navigate(['/'])
    return false;
  }

}
export const canActivate:CanActivateFn =( 
  next: ActivatedRouteSnapshot,
)=>{
  const LService = inject(LoginService)
  const RSerivce=inject(Router)
  // let route=inject(ActivatedRouteSnapshot)

  let permission:string[]=[]
  permission=next.data['Permissions']
  let uType=JSON.parse(sessionStorage.getItem('User')).role

  console.log(uType)

  if(permission.includes(uType)){
    return true;
  }
  else{
    alert('not allowed')
    return false
  }
}
