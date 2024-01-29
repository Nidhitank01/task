import { inject } from "@angular/core"
import { LoginService } from "./login.service"
import { ROUTES, Router } from "@angular/router"

export const CanActivate = () => {
  const LService = inject(LoginService)
  const RSerivce=inject(Router)
  let access = LService.getAccess()

  if(access==='allowed'){ 
    return true;
  }
  else{
    RSerivce.navigate(['/'])
    return false;
  }

}
