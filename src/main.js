import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";

axios.defaults.baseURL = 
    "https://firestore.googleapis.com/v1/projects/vuejs-http-25e2b/databases/(default)/documents";

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

