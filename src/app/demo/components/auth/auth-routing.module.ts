import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'olvidocontra', data: { breadcrumb: 'Olvidocontra' }, loadChildren: () => import('./olvidocontra/olvidocontra.module').then(m => m.OlvidocontraDemoModule) },
        { path: 'restablecercontra', data: { breadcrumb: 'Restablecercontra' }, loadChildren: () => import('./restablecercontra/restablecercontra.module').then(m => m.RestablecercontraDemoModule) },
        { path: 'correoenviado', data: { breadcrumb: 'Correoenviado' }, loadChildren: () => import('./correoenviado/correoenviado.module').then(m => m.CorreoenviadoDemoModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
