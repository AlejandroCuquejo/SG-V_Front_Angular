import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'usuario', data: { breadcrumb: 'Usuario' }, loadChildren: () => import('./usuario/usuariodemo.module').then(m => m.UsuarioDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
