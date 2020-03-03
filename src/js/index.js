import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import App from '../App.vue';
import routeData from '../routes/routes'
// import '../css/index.scss';

Vue.use(VueRouter);
Vue.prototype.$http = axios;

const routes = routeData;
const router = new VueRouter({
	mode: 'history',
	routes
});

const vm = new Vue({
    router,
    data() {
        return {
            articles: {},
            dataLoaded: false
        }
    },
    render: h => h(App),
    mounted() {
        this.$http
            .get('/data/trip-planner.json')
            .then(response => {
                this.articles = response.data;
                this.dataLoaded = true;
            })
    }
}).$mount('#app');