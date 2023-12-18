export enum LoginState {
    LoggedOut = 0,
    LoggedIn = 99,
}
/**
 * @typedef {Object} Person
 * @property {number} personId - User's person ID
 * @property {string} firstname - User's first name
 * @property {string} lastname - User's last name
 * @property {string} gender - User's gender
 * @property {string} title - User's title
 * @property {string} personalNumber - User's personal number
 * @property {string} picture - User's picture URL
 */

export const Person = {
    personId: 0,
    firstname: '',
    lastname: '',
    gender: '',
    title: '',
    personalNumber: '',
    picture: '',
}
/**
 * @typedef {Object} UserGroup
 * @property {number} userGroupId - User group ID
 * @property {string} title - Title of the user group
 * @property {string} description - Description of the user group
 * @property {string} abbr - Abbreviation of the user group
 */

export const UserGroup = {
    userGroupId: 0,
    title: '',
    description: '',
    abbr: '',
}
/**
 * @typedef {Object} ApplicationModule
 * @property {number} moduleId - Module ID
 * @property {string} title - Title of the application module
 */

export const ApplicationModule = {
    moduleId: 0,
    title: '',
}
/**
 * @typedef {Object} Application
 * @property {string} uuid - UUID of the application
 * @property {string} title - Title of the application
 * @property {TBIVersionInterface} version - Version of the application
 * @property {Array<ApplicationModule>} modules - List of application modules
 * @property {Array<string>} modulesTitles - Titles of application modules
 */

/**
 * This is the main State Element
 */
export interface UserState {
    /**
     * This is the User Id
     * @type {string}
     */
    userId: number;
    /**
     * This is the Name of the User
     */
    userName: string;

    /**
     * groups of the user
     */
    userGroups: Array<UserGroup>;

    /**
     * group titles of the user for quick requesting the titles
     */
    userGroupsTitles: Array<string>;

    /**
     * here we can derive the module rights
     */
    application: Application;

    /**
     * Firstname of the user
     */
    person: Person;

    /**
     * ist the user logged in ?
     */
    loginState: LoginState;

    /**
     * email of the user
     */
    eMail: string;
}