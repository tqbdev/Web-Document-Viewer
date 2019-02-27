import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { ConnectionBackend, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import * as fromRoot from '@sb-store/store';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from '../../../node_modules/ngx-toastr';

declare var $;

@Injectable()
export class InterceptedHttp extends Http {
    store: any;
    public pendingRequests: any = 0;
    public showLoading: boolean;
    private toastrService: ToastrService;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, store: Store<fromRoot.AppState>) {
        super(backend, defaultOptions);
        this.store = store;
    }
    intercept(observable: Observable<Response>): Observable<Response> {
        return observable;
    }
    request(
        res: string | Request,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.request(res, options);
    }


    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, options)
            .catch(e => {
                return Observable.throw(e);
            });
    }

    post(
        url: string,
        body: string,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.post(url, body, options)
            .catch(e => {
                return Observable.throw(e);
            });
    }

    put(
        url: string,
        body: string,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.put(url, body, options)
            .catch(e => {
                return Observable.throw(e);
            });
    }

    patch(
        url: string,
        body: string,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.patch(url, body, options)
            .catch(e => {
                return Observable.throw(e);
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, options)
            .catch(e => {
                return Observable.throw(e);
            });
    }
}
