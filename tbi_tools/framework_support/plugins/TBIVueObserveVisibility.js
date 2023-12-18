import { App } from 'vue';
import VueObserveVisibility from 'vue3-observe-visibility';

export class AKVueObserveVisibilityPlugin {
    constructor(app: App) {
        app.use(VueObserveVisibility);
    }
}
