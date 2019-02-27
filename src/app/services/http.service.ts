import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppConstants } from '../app.constant';

@Injectable()
export class SbHttpService {
    public header: any;
    siteId: any;
    public baseURL: string = AppConstants.API_ENDPOINT;

    constructor(private http: Http) {
    }

    get(url): Observable<Response> {
        const header = this.appendHeaders();
        return this.http.get(this.baseURL + url, {
            headers: header
        }).map(data => data.json());
    }

    post(url, data): Observable<Response> {
        const header = this.appendHeaders(data);
        if (data instanceof FormData) {
            data.append('site_id', this.siteId);
            return this.http.post(this.baseURL + url, data, {
                headers: header
            }).map(data => data.json());
        }
        data.site_id = this.siteId;
        return this.http.post(this.baseURL + url, JSON.stringify(data), {
            headers: header
        }).map(data => data.json());
    }

    put(url, data): Observable<Response> {
        const header = this.appendHeaders();
        return this.http.put(this.baseURL + url, JSON.stringify(data), {
            headers: header
        }).map(data => data.json());
    }

    patch(url, data): Observable<Response> {
        const header = this.appendHeaders();
        if (data instanceof FormData) {
            data.append('site_id', this.siteId);
            return this.http.patch(this.baseURL + url, data, {
                headers: header
            }).map(data => data.json());
        } else {
            data.site_id = this.siteId;
        }
        return this.http.patch(this.baseURL + url, JSON.stringify(data), {
            headers: header
        }).map(data => data.json());
    }

    delete(url): Observable<Response> {
        const header = this.appendHeaders();
        return this.http.delete(this.baseURL + url, {
            headers: header
        }).map(data => data.json());
    }

    private appendHeaders(formData = null) {
        this.siteId = localStorage.getItem('site_id');
        const userToken = localStorage.getItem('token');
        const header = new Headers();

        header.append('Accept', 'application/json, text/plain, */*');
        if (userToken) {
            header.append('Authorization', 'Bearer ' + userToken);
        }

        if (!formData || !(formData instanceof FormData)) {
            header.append('Content-Type', 'application/json');
        }

        return header;
    }
}
