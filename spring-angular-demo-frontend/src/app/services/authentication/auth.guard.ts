import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthenticationService } from './authentication.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router,
    private authService: AuthenticationService) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean 
  {
    if(this.authService.checkAuth()){
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    }
  }
}
