import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'inventario', data: { breadcrumb: 'Inventario' }, loadChildren: () => import('./inventario/inventario.module').then(m => m.inventarioDemoModule) },
        { path: 'inventarioForm', data: { breadcrumb: 'InventarioForm' }, loadChildren: () => import('./inventario/inventarioForm/inventarioForm.module').then(m => m.inventarioFormdemoModule) },
        { path: 'vender', data: { breadcrumb: 'vender' }, loadChildren: () => import('./vender/vender.module').then(m => m.venderdemoModule) },
        { path: 'historialventas', data: { breadcrumb: 'Historialventas' }, loadChildren: () => import('./historialventas/historialventas.module').then(m => m.historialventasdemoModule) },
        { path: 'usuarios', data: { breadcrumb: 'Usuario' }, loadChildren: () => import('./usuarios/usuariodemo.module').then(m => m.UsuariosDemoModule) },
        { path: 'agregarusuario', data: { breadcrumb: 'Agregarusuario' }, loadChildren: () => import('./agregarusuario/agregarusuario.module').then(m => m.agregarusuariodemoModule) },
        { path: 'proveedor', data: { breadcrumb: 'Proveedor' }, loadChildren: () => import('./proveedor/proveedor.module').then(m => m.proveedorDemoModule) },
        { path: 'proveedorForm', data: { breadcrumb: 'ProveedorFrom' }, loadChildren: () => import('./proveedor/proveedorForm/proveedorForm.module').then(m => m.proveedorFormdemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PlantasRoutingModule { }
