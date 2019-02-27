import { SbLoader } from '@sb-shared/components/loader/loader';
import { SbP500 } from '@sb-shared/components/p500/p500';
// import { SbP404 } from '@sb-shared/components/p404/p404';
import { SbLogin } from '@sb-shared/components/login/login';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        LaddaModule,
        TranslateModule
    ],
    declarations: [
        SbLogin,
        // SbP404,
        SbP500,
        SbLoader
    ],
    exports: [
        SbLogin,
        // SbP404,
        SbP500,
        SbLoader
    ],
    entryComponents: [
    ]
})
export class SbComponentsModule { }
