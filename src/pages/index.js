import { createRouter, createWebHashHistory } from 'vue-router';

const BrowserPage = () => import('./BrowsePage/index.vue');
// const SearchPage = () => import("./SearchPage/index.vue");

const routes = [
    {
        path: '/',
        component: BrowserPage,
        name: 'Home',
        props: { isHeader: true },
    },
    {
        path: '/browse/tv',
        component: BrowserPage,
        name: 'TV Shows',
        props: { isHeader: true },
    },
    {
        path: '/browse/movies',
        compoennt: BrowserPage,
        name: 'Movies',
        props: { isHeader: true },
    },
    {
        path: '/browse/popular',
        compoent: BrowserPage,
        name: 'New & Popular',
        props: { isHeader: true },
    },
    {
        path: '/search',
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, _, savedPosition) {
        if (to.query.scrollTop) {
            return { left: 0, top: to.query.scrollTop };
        }

        if (savedPosition) {
            return savedPosition;
        }

        return { left: 0, top: 0 };
    },
});

export default router;
