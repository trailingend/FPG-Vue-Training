import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store/store';

import Global from './components/Global.vue';
import Home from './components/Home.vue';
import Person from './components/Person.vue';
import Trait from './components/Trait.vue';

Vue.use(VueRouter);

const ROUTES = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/person',
    name: 'person',
    component: Person
}, {
    path: '/trait',
    name: 'trait',
    component: Trait
}
];

const router = new VueRouter({
    routes : ROUTES,
    mode: 'history'
});

// router.beforeEach((to, from, next) => {
//
// })

export default router;
