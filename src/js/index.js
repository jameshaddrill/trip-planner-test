import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import routeData from '../routes/routes'
// import '../css/index.scss';

Vue.use(VueRouter);

const routes = routeData;
const router = new VueRouter({
	mode: 'history',
	routes
});

const vm = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');