import { defineStore } from 'pinia';
import { ref } from 'vue';
import {TBIVersion} from "../../js_modules/core/TBIVersion.js";
import {AppWireframes, TBIBreakpoints, TBIOrientation} from "./types.js";

const app_var= {
    appName: 'My App',
    version: new TBIVersion({ major: 0, minor: 0, patch: 0 }),
    loadingTimeInMs: 0,
    viewportHeight: 0,
    navigationMenu: [],
    viewportWidth: 0,
    breakpoint: TBIBreakpoints.xxl,
    orientation: TBIOrientation.landscape,
    currentWireframe: AppWireframes.App,
    currentModuleTitle: '',
    messages: [],
    isMobile: true,
    preLoginURL: '/',
};

export const TBIAppStore = defineStore('app', () => {
    const state = ref(app_var);

    const displayMessage = (params) => {
        state.value.messages.push(params);
    };

    const messageHasBeenDisplayed = (params) => {
        const index = state.value.messages.indexOf(params, 0);
        if (index > -1) {
            state.value.messages.splice(index, 1);
        }
    };

    return { state, displayMessage, messageHasBeenDisplayed };
});
