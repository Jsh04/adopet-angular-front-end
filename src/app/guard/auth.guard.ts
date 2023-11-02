
import { Injectable, inject } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private userService: UserService){}

    canActivate(): boolean  {
        if (this.userService.estaLogado()) {
            console.log(this.userService.estaLogado());
            return true
        }else{
            this.router.navigate(['/login'])
            return false
        }
    }
}