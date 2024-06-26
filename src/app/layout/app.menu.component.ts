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
                    { label: 'Empleados', icon: 'pi pi-fw pi-users', routerLink: ['/plantas/usuarios'] },
                    //{ label: 'Proveedor', icon: 'pi pi-fw pi-box', routerLink: ['/plantas/proveedor'] },
                    //{ label: 'Cerrar sesion', icon: 'pi pi-fw pi-sign-out', routerLink: ['/auth/login'] },
                ]
            }
        ];
    }
}
