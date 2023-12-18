import messages from 'tbi_tools/dev_tools/TBICombineLocales';
import { App } from 'vue';
import { createI18n } from 'vue-i18n';

export class TBII18nPlugin {
    i18n;

    constructor(app: App) {
        const i18nConfig = {
            legacy: false, // Vue 3 Modus
            locale: 'de_DE',
            fallbackLocale: 'en_EN',
            fallbackWarn: false,
            missingWarn: false,
            globalInjection: true,
            messages,
        };

        this.i18n = createI18n(i18nConfig);

        app.use(this.i18n);
    }
}
