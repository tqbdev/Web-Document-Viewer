import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LaddaModule } from 'angular2-ladda';
import { NgSelectModule } from '@ng-select/ng-select';

import { SbPipesModule } from '@sb-shared/pipes/pipe.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LaddaModule,
        NgSelectModule,
        SbPipesModule
    ],
    declarations: [],
    exports: [],
    entryComponents: []
})
export class SbModalsModule {}
