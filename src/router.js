import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UserPosts from './views/UserPosts';
import UserProfile from './views/UserProfile';
import HeaderHome from './views/HeaderHome';
import HeaderUsers from './views/HeaderUsers';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', components: {
            default:  Home,
            header: HeaderHome
        }},
        { path: '/users/:id', 
            components: {
                default:  Users,
                header: HeaderUsers
            },
            props: true,
            children: [
                { path: 'posts', component: UserPosts },
                { path: 'profile', component: UserProfile, name: 'user-profile' },
            ]
        }
    ]
});
