import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { SbDocument } from './document';

const routes: Routes = [{ path: '', component: SbDocument }];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild(),
        PdfViewerModule
    ],
    declarations: [SbDocument],
    exports: []
})
export class DocumentModule {}
