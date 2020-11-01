import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UserPosts from './views/UserPosts';
import UserProfile from './views/UserProfile';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home }, 
        { path: '/users/:id', 
            component: Users,
            props: true,
            children: [
                { path: 'posts', component: UserPosts },
                { path: 'profile', component: UserProfile, name: 'user-profile' },
            ]
        }
    ]
});
