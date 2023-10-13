import { FilterParams } from '../shared/model/filter-params.model';
import { ModalConfigParams } from '../shared/model/modal-config-params.model';
import { GlobalSettings } from './global-settings';

export class GlobalVariables {
    static SISTEMA = {
        SIGLAS: 'SGDE',
        NOMBRE: 'Sistema de Gestión de Documentos Electrónicos',
        VERSION: '1.0.0',
    }

    static ESTADO = [
        { name: 'Activo', value: 'A' },
        { name: 'Inactivo', value: 'I' },
    ];

    static ESTADO_VALUE = {
        ACTIVO: 'A',
        INACTIVO: 'I',
    }

    static VIEW_LABELS = {
        CREATE: 'Agregar',
        EDIT: 'Editar',
        ACCEPT: 'Aceptar',
        CANCEL: 'Cancelar',
        SAVE: 'Guardar',
        SEND: "Enviar",
        RETURN: "Volver",
        UPDATE: 'Actualizar',
        DELETE: 'Eliminar',
        ACTIVE: 'Activo',
        INACTIVE: 'Inactivo',
        LOGIN: 'Ingresar',
        SEARCH: 'Buscar',
        CLEAR: 'Limpiar',
        PREVIEW: 'Ver',
        CHANGE_PASSWORD: 'Cambiar contraseña',
        NEXT: 'Siguiente',
        LEFT: 'Atrás',
        BACK: 'Volver',
        DONE: 'Finalizar',
        OUT: 'Salir',
    };

    static MESSAGES = {
        EMPTY_TABLE: 'No se encontraron datos.',
        REQUIRED: '* Este campo es obligatorio.',
        ERROR_INESPERADO: 'Ocurrió un error inesperado.',
        REQUIRED_VALIDATOR: 'El campo "{0}" es requerido.',
        INVALID_VALIDATOR: 'El campo "{0}" es inválido.',
    };
    static MESSAGES_TOAST = {
        SUCCESS: 'Operación exitosa',
        WARN: 'Atención',
        ERROR: 'Error',
    };
}

export const defaultFilterParam: Readonly<FilterParams> = {
    pageSize: 10,
    start: 0,
    sortAsc: true,
    sortField: '', 
    sortOrder:1

};

export const defaultModalConfig: Readonly<ModalConfigParams> = {
    header: '',
    dismissableMask: true,
    width: GlobalSettings.DIALOG_MEDIUM,
    height: GlobalSettings.DIALOG_HEIGHT
};
