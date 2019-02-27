import { AppConstants } from './app.constant';
import { AuthorizeGuard } from '@sb-shared/guards/authorize';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SbLogin } from '@sb-shared/components/login/login';
import { SbP500 } from '@sb-shared/components/p500/p500';

// Vietnam Routes
export const routes: Routes = [
    {
        path: '500',
        component: SbP500,
        data: {
            title: 'Page 500'
        }
    },
    {
        path: '404',
        loadChildren: './shared/components/p404/p404.module#NotFoundModule',
        data: {
            title: 'Login Page'
        }
    },
    {
        path: '',
        loadChildren: './modules/document/document.module#DocumentModule',
        data: {
            title: 'Home'
        }
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
