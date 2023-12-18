import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {TBIVersion} from "../../js_modules/core/TBIVersion.js";

const user_state = {
    userId: 0,
    userName: '',
    userGroups: [
        {
            userGroupId: 0,
            title: '',
            description: '',
            abbr: '',
        },
    ],
    userGroupsTitles: [],
    application: {
        uuid: '',
        title: '',
        version: new TBIVersion({ major: 0, minor: 0, patch: 0 }),
        modules: [],
        modulesTitles: [],
    },
    person: {
        personId: 0,
        firstname: '',
        lastname: '',
        gender: '',
        title: '',
        personalNumber: '',
        picture: '',
    },
    eMail: '',
    loginState: 0, // LoggedOut
};

export const TBIUserStore = defineStore('users', () => {
    const state = ref(user_state);
    const getUserFullName = computed(() => `${state.value.person.firstname} ${state.value.person.lastname}`);
    const getUserGroups = computed(() => state.value.userGroups);

    return { state, getUserFullName, getUserGroups };
});
