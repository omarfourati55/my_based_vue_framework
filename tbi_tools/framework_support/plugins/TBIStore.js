import { createPinia, Pinia } from 'pinia';
import { App } from 'vue';

export class AKStorePlugin {
    store : Pinia;
    constructor(app: App) {
        this.store = createPinia();
        app.use(this.store);
    }
}