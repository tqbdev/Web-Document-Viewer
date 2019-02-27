import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SbHttpService } from '@sb-services/http.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {
    PerfectScrollbarConfigInterface,
    PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { GlobalService } from '@sb-services/global.service';
import { SbSharedModule } from '@sb-shared/shared.module';
import { SbStoreModule } from '@sb-store/store.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

// Import containers
// const APP_CONTAINERS = [DefaultLayoutComponent];

// Import routing module
// Import 3rd party components
// Extension
// export function HttpLoaderFactory(http: HttpClient) {
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export function appInitializer(globalService: GlobalService) {
//   return () => globalService.appInitialize();
// }

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PerfectScrollbarModule,
        SbStoreModule,
        SbSharedModule,
        Ng2Webstorage,
        ToastrModule.forRoot({
            preventDuplicates: true
        }),
        HttpClientModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: HttpLoaderFactory,
        //         deps: [HttpClient]
        //     }
        // }),
        ChartsModule
    ],
    declarations: [AppComponent],
    providers: [
        GlobalService,
        SbHttpService
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [GlobalService] },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
