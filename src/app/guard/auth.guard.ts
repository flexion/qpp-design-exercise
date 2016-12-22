import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Authentication} from '../_services/authentication';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authentication: Authentication) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return !!localStorage.getItem('currentUser');
    }
}
