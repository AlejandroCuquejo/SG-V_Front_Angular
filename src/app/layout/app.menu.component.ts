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
                    { label: 'Gestion inventario', icon: 'pi pi-fw pi-check-square', routerLink: ['/menu/plantas/inventario'] },
                    { label: 'Vender productos', icon: 'pi pi-fw pi-dollar', routerLink: ['/menu/plantas/vender'] },
                    //{ label: 'Historial de ventas', icon: 'pi pi-fw pi-book', routerLink: ['/menu/plantas/historialventas'] },
                    { label: 'Empleados', icon: 'pi pi-fw pi-users', routerLink: ['/menu/plantas/usuarios'] },
                    //{ label: 'Proveedor', icon: 'pi pi-fw pi-box', routerLink: ['/menu/plantas/proveedor'] },
                    { label: 'Cerrar sesion', icon: 'pi pi-fw pi-sign-out', routerLink: ['/auth/login'] },
                ]
            }
        ];
    }
}
