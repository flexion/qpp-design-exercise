import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Authentication} from '../authentication';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authentication: Authentication) {
        console.log('AuthGuard constructor');
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authentication.currentUser.getValue()) {
            console.log('logged in with currentUser:', this.authentication.currentUser);
            return true;
        }
        console.log('not logged in');

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
