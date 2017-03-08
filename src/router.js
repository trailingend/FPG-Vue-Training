import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store/store';

import App from './components/App.vue';
import Person from './components/Person.vue';

Vue.use(VueRouter);

const ROUTES = [{
    path: '/',
    name: 'entry',
    component: 'App'
},{
    path: '/person',
    name: 'person',
    component: 'Person'
},{
    path: '/trait',
    name: 'trait',
    component: 'Person'
}
];

const router = new VueRouter({
    ROUTES,
});

// router.beforeEach((to, from, next) => {
//
// })

export default router;
