import { AppConstants } from './../../../app.constant';
import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReducerManagerDispatcher, Store } from '@ngrx/store';
// import * as account from '@sb-store/account/account.actions';
import * as fromRoot from '@sb-store/store';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-dashboard',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class SbLogin implements OnInit, OnDestroy {
    isLoading: any = false;
    loginData: any = {
        siteId: ''
    };
    dispatcherSub: Subscription;
    isLoggedInSub: Subscription;
    constructor(
        private store: Store<fromRoot.AppState>,
        private router: Router,
        private toastrService: ToastrService,
        private dispatcher: ReducerManagerDispatcher
    ) {
        const token = localStorage.getItem('token');
        const siteId = localStorage.getItem('site_id');
        if (siteId) {
            this.loginData.siteId = siteId;
        }
        if (token) {
            this.router.navigate(['providers']);
        }
        // this.dispatcherSub = this.dispatcher.subscribe((action: any) => {
        //     switch (action.type) {
        //         case account.LOGIN_FAILED:
        //             const errorCode = _.get(action, 'payload.status_code');
        //             if (errorCode === 422 || errorCode === 401 || errorCode === 405) {
        //                 this.toastrService.error('Wrong username or password');
        //             }
        //             this.isLoading = false;
        //             break;
        //         case account.LOAD_USER_INFO_SUCCESS:
        //             this.isLoading = false;
        //             location.href = '/';
        //             // this.router.navigate(['']);
        //             break;
        //         default:
        //             break;
        //     }
        // });
    }

    ngOnInit() {}

    ngOnDestroy() {
        this.dispatcherSub.unsubscribe();
        // this.isLoggedInSub.unsubscribe();
    }

    login(form) {
        if (form.valid) {
            this.isLoading = true;
            localStorage.setItem('site_id', form.value.siteId);
            // this.store.dispatch(
            //     new account.Login({
            //         phone: form.value.phone,
            //         password: form.value.password
            //     })
            // );
        }
    }
}
