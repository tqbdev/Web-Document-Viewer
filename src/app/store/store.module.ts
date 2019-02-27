import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { metaReducers, reducers } from '@sb-store/store';
import { httpFactory } from '../services/http.factory';
// Import services
// Define effects
const APP_EFFECTS = [EffectsModule.forRoot([])];

const APP_SERVICES = [];

@NgModule({
    imports: [
        ...APP_EFFECTS,
        HttpModule,
        StoreModule.forRoot(reducers, { metaReducers })
    ],
    providers: [
        ...APP_SERVICES,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions, Store]
        }
    ],
    declarations: [],
    exports: []
})
export class SbStoreModule {}
