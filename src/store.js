import  Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 2
    },
    getters: {
        doubleCount: state => state.count * 2
    },
    mutations: {
        increment(store, number) {
            store.count += number;
        },
        decrement(store, number) {
            store.count -= number;
        }
    }
})
