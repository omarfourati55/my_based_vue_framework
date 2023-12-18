import {TBIRoutes} from 'tbi_tools/router';
import { App} from 'vue';
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import Routes from './../AKAppRoutesGetter';
import AKNotFoundRouter from './AKNotFoundRouter.vue';

export const combinedRoutes: RouteRecordRaw[] = [
    ...Routes.map((item: RouteMenuItem ) => {
        return {
            component: item.component,
            path: item.path,
            name: item.name,
        };
    }),
    ...TBIRoutes.map((item: RouteMenuItem) => {
        return {
            path: item.path,
            component: item.component,
            name: item.name,
        };
    }),
];

const seenPaths = new Set();
export const routes: RouteRecordRaw[] = combinedRoutes.reduce((acc, item) => {
    if (!seenPaths.has(item.path)) {
        seenPaths.add(item.path);
        acc.push({
            path: item.path,
            component: item.component,
            name: item.name,
        });
    }
    return acc;
}, []);

export class TBIRouterPlugin {
    router : Router;
    constructor(app: App) {
        this.router = createRouter({
            history: createWebHistory(),
            routes: [
                ...routes,
                { path: '/error', component: AKNotFoundRouter, name: 'error' },
                { path: '/:pathMatch(.*)*', name: 'NotFound', component: AKNotFoundRouter },
            ],
        });
        app.use(this.router);
    }
}
