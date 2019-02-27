import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SbSharedModule } from '@sb-shared/shared.module';

import { SbP404 } from './p404';

// Angular
const routes: Routes = [{ path: "", component: SbP404 }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SbSharedModule
  ],
  declarations: [SbP404]
})
export class NotFoundModule {}
