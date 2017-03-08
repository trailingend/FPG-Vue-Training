import Vue from 'vue';
import App from './components/App.vue';

import router from './router';

import {store} from './store/store';

new Vue({
	router, store,
	components: {App}
}).$mount('#container')
