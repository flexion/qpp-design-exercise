import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Authentication} from '../_services/authentication';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let loggedIn = !!localStorage.getItem('currentUser');
        if (loggedIn) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
        return false;
    }
}
