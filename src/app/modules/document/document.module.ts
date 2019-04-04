import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { SbDocument } from './document';
import { SbPipesModule } from '@sb-shared/pipes/pipe.module';

const routes: Routes = [{ path: ':fileName', component: SbDocument }];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild(),
        PdfViewerModule,
        PdfJsViewerModule,
        SbPipesModule
    ],
    declarations: [SbDocument],
    exports: []
})
export class DocumentModule {}
