import 'primeicons/primeicons.css';

import PrimeVue, { PrimeVueConfiguration } from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import { App } from 'vue';

export class AKPrimeVuePlugin {
    constructor(app: App) {
        const primeVueConfig: PrimeVueConfiguration = {
            ripple: true,
        };

        app.use(PrimeVue, primeVueConfig);
        app.use(ConfirmationService);
        app.use(ToastService);
    }
}
