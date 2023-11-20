import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthGuardRole implements CanActivate{
    constructor(private router: Router, private userService: UserService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
       const roleEsperado:string = route.data['role'] as string
       if (this.userService.retornarRole() == roleEsperado) {
            return true;
       }else{
            alert("Faça o login e tente novamente")
            this.router.navigate(['/login'])
            return false;
       }
    }
}
