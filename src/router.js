import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/Home")
        },
        {
            path: "/signin",
            name: "login",
            component: () => import("./views/Login")
        },
        {
            path: "/signup",
            name: "register",
            component: () => import("./views/Register")
        },
        {
            path: "/profile",
            name: 'profile',
            component: () => import('./views/Profile')
        },
        {
            path: '/places',
            name: 'places',
            component: () => import('./views/Places')
        },
        {
            path: '/cinema',
            name: 'cinemas',
            component: () => import('./views/Cinemas')
        },
        {
            path: '/session',
            name: 'sessions',
            component: () => import('./views/Sessions')
        }
    ]
});