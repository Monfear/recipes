import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const accountGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
        const authService: AuthService = inject<AuthService>(AuthService);
        const router: Router = inject<Router>(Router);

        let ifPermitted: boolean = false;

        if (authService.ifLoggedIn) {
            ifPermitted = true;
        } else {
            ifPermitted = false;

            router.navigateByUrl('login');
        };

    return ifPermitted;
};