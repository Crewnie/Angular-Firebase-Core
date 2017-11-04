import { Injectable } from '@angular/core';
import {
    CanActivate, CanLoad,
    Router, Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    NavigationExtras
  } from '@angular/router';

  // Auth Service
import { AuthService } from '../core/auth.service';

@Injectable()
export class AccountHealthGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private acAuth: AuthService  // Angular Crewnie Authentication
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called');
        return true;
    }

    canLoad(route: Route): boolean {
        console.log('AccountHealthGuard#canLoad called');
        let go = false;

        if ( this.isEmailValidated() && this.isRegistrationFinished() ) {
            go = true;
        }
        return go;
    }

    isEmailValidated() {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                'problem_title': 'Please validate your email',
                'solution': 'Please check your email, and click on the validation link to activate your account.',
                'action': 'Resend verification code',
                queryParamsHandling: 'preserve'
            }
          };

        this.router.navigate(['/waiting-for'], navigationExtras);
        return false;
    }
    isRegistrationFinished() {
        return true;
    }
}
