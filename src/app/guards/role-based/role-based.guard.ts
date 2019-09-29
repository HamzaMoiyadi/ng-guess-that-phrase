import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import { map, take, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RoleBasedGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this._auth.user$.pipe(
      switchMap(user => {
        console.log(user);
        if(user) {
          if (user["role"] && user["role"] === "admin") {
            console.log('access given because admin')
            return of(true);
          } else {
            this._router.navigate(["/"]);
            return of(false);
          }
        } else {
          return of(true);
        }
      })
    );
  }
}
