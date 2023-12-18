import {Component} from "vue";
import {TBIVersionInterface} from 'tbi_tools/js_modules/core/TBIVersion.js'

/**
 * Possible Wireframes of the Application
 */
export enum AppWireframes {
    /** This is the Login Screen */
    LogIn = 0,
    /** This is the normal Application */
    App = 1,
    /** This is the Error Screen */
    Error = 2,
    /** This is the Print Screen */
    Print = 3,
    /** This is the Loading Screen */
    Loading = 4,
}
export enum TBIOrientation {
    landscape = 0,
    portrait = 1,
}

export enum TBIBreakpoints {
    xs = 0,
    sm = 1,
    md = 2,
    lg = 3,
    xl = 4,
    xxl = 5,
}

export enum TBIMessageType {
    info = 0,
    warning = 1,
    error = 2,
    success = 3,
}

/**
 * @typedef {Object} TBITheMainMenuItem
 * @property {string} title - Title which will be displayed
 * @property {string} name - Name which is an identifier
 * @property {string[]} tags - Tags for advanced search (NEEDS NAME INCLUDED)
 * @property {string} [link] - Link where the item will be targeted (optional)
 * @property {string} [icon] - PrimeVue icon class name (optional)
 * @property {string} [color] - Color for the buttons of the CenteredNav (optional)
 */

export const TBITheMainMenuItem = {
    title: '',
    name: '',
    tags: [],
    link: '',
    icon: '',
    color:'',
}
/**
 * @typedef {Object} AppNavigationItem
 * @property {string} title - Title which will be displayed
 * @property {string} name - Name which is an identifier
 * @property {string[]} tags - Tags for advanced search (NEEDS NAME INCLUDED)
 * @property {string} [link] - Link where the item will be targeted (optional)
 * @property {string} [icon] - PrimeVue icon class name (optional)
 * @property {string[]} [viewRights] - List of items viewable by particular rights
 *                                      "all" means everyone can see this item
 * @property {string[]} [groupRights] - List of group rights
 * @property {AppNavigationItem[]} [children] - Array of child navigation items (optional)
 * @property {Component} [vueComponent] - Vue component (optional)
 * @property {number} [order] - Order of the navigation item (optional)
 * @property {boolean} [hideInNav] - Whether to hide the item in the navigation (optional)
 */

export const AppNavigationItem = {
    title: '',
    name: '',
    tags: [],
    link: '',
    icon: '',
    viewRights: [],
    groupRights: [],
    children: [],
    vueComponent: null,
    order: 0,
    hideInNav: false,
}


/**
 * @typedef {Object} AppMessage
 * @property {TBIMessageType} messageType - Type of the message
 * @property {string[]} messageTranslatableParts - Array of translatable parts of the message
 * @property {TBIBECommErrorResponseSchema} [errorData] - Error data (optional)
 * @property {boolean} [messageWasDisplayed] - Whether the message was displayed (optional)
 */

export const AppMessage = {
    messageType: TBIMessageType.info,
    messageTranslatableParts: [],
    errorData: null,
    messageWasDisplayed: false,
}

/**
 * @typedef {Object} AppState
 * @property {string} appName - Application Name for your App
 * @property {TBIVersionInterface} version - Version of this Application
 * @property {number} viewportHeight - Height of the application viewport
 * @property {number} viewportWidth - Width of the application viewport
 * @property {TBIBreakpoints} breakpoint - Current breakpoint of the application
 * @property {TBIOrientation} orientation - Current orientation of the application
 * @property {AppWireframes} currentWireframe - Current Wireframe displayed
 * @property {number} loadingTimeInMs - Milliseconds passed while loading the app
 * @property {AppNavigationItem[]} navigationMenu - Main Navigation menu
 * @property {AppMessage[]} messages - Messages to display
 * @property {string} currentModuleTitle - Module Title to display in the header
 * @property {boolean} isMobile - True if mobile or tablet
 * @property {string} preLoginURL - Pre-login URL
 */

export const AppState = {
    appName: '',
    version: undefined,
    viewportHeight: 0,
    viewportWidth: 0,
    breakpoint: TBIBreakpoints.xs,
    orientation: TBIOrientation.landscape,
    currentWireframe: AppWireframes.Loading,
    loadingTimeInMs: 0,
    navigationMenu: [],
    messages: [],
    currentModuleTitle: '',
    isMobile: false,
    preLoginURL: '',
}