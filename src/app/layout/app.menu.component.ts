import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menu ',
                items: [
                    { label: 'Gestion inventario', icon: 'pi pi-fw pi-check-square', routerLink: ['/plantas/inventario'] },
                    { label: 'Vender productos', icon: 'pi pi-fw pi-dollar', routerLink: ['/plantas/vender'] },
                    { label: 'Historial de ventas', icon: 'pi pi-fw pi-book', routerLink: ['/plantas/historialventas'] },
                    { label: 'Realizar envio', icon: 'pi pi-fw pi-send', routerLink: ['/plantas/envio'] },
                    { label: 'Historial de envios', icon: 'pi pi-fw pi-book', routerLink: ['/plantas/historialenvios'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/plantas/usuarios'] },
                    { label: 'Agregar usuario', icon: 'pi pi-fw pi-user-plus', routerLink: ['/plantas/agregarusuario'] },
                    { label: 'Clientes', icon: 'pi pi-fw pi-briefcase', routerLink: ['/plantas/clientes'] },
                    { label: 'Proveedor', icon: 'pi pi-fw pi-box', routerLink: ['/plantas/proveedor'] },
                    { label: 'Solicitar productos', icon: 'pi pi-fw pi-globe', routerLink: ['/plantas/solicitarproductos'] },
                    { label: 'Inicio de sesiones', icon: 'pi pi-fw pi-power-off', routerLink: ['/plantas/historialinicios'] },
                    { label: 'Configuracion', icon: 'pi pi-fw pi-cog', routerLink: ['/plantas/configuracion'] },
                    { label: 'Cerrar sesion', icon: 'pi pi-fw pi-sign-out', routerLink: ['/auth/login'] },
                ]
            }
        ];
    }
}
