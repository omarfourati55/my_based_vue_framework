/**
 * https://floating-vue.starpad.dev/
 */
import 'floating-vue/dist/style.css';

import FloatingVue from 'floating-vue';
import { App } from 'vue';

export class TBIFloatingVuePlugin {
    constructor(app: App) {
        app.use(FloatingVue, {
            themes: {
                'tbi-white': {
                    $extend: 'tooltip',
                },
            },
        });
    }
}

