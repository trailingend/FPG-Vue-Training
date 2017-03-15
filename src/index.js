import Vue from 'vue';
import Global from './components/Global.vue';

import router from './router';

import {store} from './store/store';

new Vue({
	router, store,
	components: {Global}
}).$mount('#container')
