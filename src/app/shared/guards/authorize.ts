import { Injectable, OnDestroy } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '@sb-store/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthorizeGuard implements CanActivate, OnDestroy {
    isLoggedIn: any;
    isLoggedInSub: Subscription;
    constructor(
        private router: Router,
        private store: Store<fromRoot.AppState>
    ) {
        // this.isLoggedInSub = this.store.select(fromRoot.accountGetIsLoggedInState)
        //     .subscribe((isLoggedIn) => {
        //         this.isLoggedIn = isLoggedIn;
        //     })
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.isLoggedIn) {
            return true;
        }
        this.router.navigate(['login']);
    }

    ngOnDestroy() {
        this.isLoggedInSub.unsubscribe();
    }
}
