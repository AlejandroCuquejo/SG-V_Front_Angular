import { MessageService } from 'primeng/api';
import { GlobalSettings } from '../../util/global-settings';
import { GlobalVariables } from '../../util/global-variables';

export class MessageHandler {
    constructor(private messageService?: MessageService) {}

    /**
     * Displays a notification message using the PrimeNG MessageService.
     * @param messageClass The CSS class for the message severity (e.g., 'info', 'warn', 'error', 'success').
     * @param summary The summary text for the message.
     * @param detail The detailed text for the message.
     */
    private showMessage(messageClass: string, summary: string, detail: string) {
        this.messageService?.add({
            severity: messageClass,
            summary,
            detail,
            life: GlobalSettings.SHORT_TIME,
        });
    }

    /**
     * Displays a success notification message.
     * @param message The success message to display.
     */
    showSuccessMessage(message: string) {
        this.showMessage(
            GlobalSettings.SUCCESSFUL_MESSAGE_CLASS,
            GlobalVariables.MESSAGES_TOAST.SUCCESS,
            message
        );
    }

    /**
     * Displays a warning notification message.
     * @param message The warning message to display.
     */
    showWarningMessage(message: string) {
        this.showMessage(
            GlobalSettings.WARNING_MESSAGE_CLASS,
            GlobalVariables.MESSAGES_TOAST.WARN,
            message
        );
    }

    /**
     * Displays an error notification message.
     * @param message The error message to display.
     */
    showErrorMessage(message: string) {
        this.showMessage(
            GlobalSettings.FAILED_MESSAGE_CLASS,
            GlobalVariables.MESSAGES_TOAST.ERROR,
            message
        );
    }
}