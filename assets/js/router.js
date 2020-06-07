import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Frontend/Home';
import Shop from './components/Frontend/Shop';
import Blog from './components/Frontend/Blog';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
        },
        {
			path: '/shop',
			name: 'shop',
			component: Shop
		},
		{
			path: '/blog',
			name: 'blog',
			component: Blog
        }
	]
});