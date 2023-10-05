import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'inventario', data: { breadcrumb: 'Inventario' }, loadChildren: () => import('./inventario/inventario.module').then(m => m.inventarioDemoModule) },
        { path: 'inventarioForm', data: { breadcrumb: 'InventarioForm' }, loadChildren: () => import('./inventario/inventarioForm/inventarioForm.module').then(m => m.inventarioFormdemoModule) },
        { path: 'vender', data: { breadcrumb: 'vender' }, loadChildren: () => import('./vender/vender.module').then(m => m.venderdemoModule) },
        { path: 'historialventas', data: { breadcrumb: 'Historialventas' }, loadChildren: () => import('./historialventas/historialventas.module').then(m => m.historialventasdemoModule) },
        { path: 'envio', data: { breadcrumb: 'Envios' }, loadChildren: () => import('./envio/envio-routing.module').then(m => m.EnvioDemoRoutingModule) },
        { path: 'historialenvios', data: { breadcrumb: 'Historialenvios' }, loadChildren: () => import('./historialenvios/historialenvios.module').then(m => m.historialenviosDemoModule) },
        { path: 'usuarios', data: { breadcrumb: 'Usuario' }, loadChildren: () => import('./usuarios/usuariodemo.module').then(m => m.UsuariosDemoModule) },
        { path: 'agregarusuario', data: { breadcrumb: 'Agregarusuario' }, loadChildren: () => import('./agregarusuario/agregarusuario.module').then(m => m.agregarusuariodemoModule) },
        { path: 'clientes', data: { breadcrumb: 'Cliente' }, loadChildren: () => import('./clientes/clientes.module').then(m => m.clientesDemoModule) },
        { path: 'proveedor', data: { breadcrumb: 'Proveedor' }, loadChildren: () => import('./proveedor/proveedor.module').then(m => m.proveedorDemoModule) },
        { path: 'solicitarproductos', data: { breadcrumb: 'Solicitarproductos' }, loadChildren: () => import('./solicitarproductos/solicitarproductos.module').then(m => m.solicitarproductoDemoModule) },
        { path: 'historialinicios', data: { breadcrumb: 'Historialinicios' }, loadChildren: () => import('./historialinicios/historialinicios.module').then(m => m.HistorialiniciosdemoModule) },
        { path: 'configuracion', data: { breadcrumb: 'Configuracion' }, loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PlantasRoutingModule { }
