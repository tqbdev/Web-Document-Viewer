import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { SbComponentsModule } from '@sb-shared/components/components.module';
import { SbDirectivesModule } from '@sb-shared/directives/directives.module';
import { AuthorizeGuard } from '@sb-shared/guards/authorize';
import { SbPipesModule } from '@sb-shared/pipes/pipe.module';
import { DataTableModule } from 'angular2-datatable';
import { LaddaModule } from 'angular2-ladda';

import { SbModalsModule } from '@sb-shared/modals/modals.module';

@NgModule({
    imports: [TranslateModule.forChild()],
    providers: [AuthorizeGuard],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        LaddaModule,
        DataTableModule,
        SbPipesModule,
        SbComponentsModule,
        SbModalsModule,
        SbDirectivesModule,
        TranslateModule
    ]
})
export class SbSharedModule {}
