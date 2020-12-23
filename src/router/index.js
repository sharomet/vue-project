import { createRouter, createWebHistory } from 'vue-router';

/**
 * Auth Pages
 */
import Login from '@/views/auth/Login';
import Registration from '@/views/auth/Registration';

/**
 * Admin Pages
 */
import Dashboard from '@/views/admin/Dashboard';
import Settings from '@/views/admin/Settings';

const routes = [
	{
		path: '/auth',
		component: () => import('@/layouts/Auth'),
		children: [
			{ 
				path: 'login',
				name: 'login',
				component: Login
			},
			{
				path: 'registration',
				name: 'registration',
				component: Registration,
			},
			{
				path: '/:pathMatch(.*)*',
				redirect: '/error'
			},
		],
	},
	{
		path: '/admin',
		component: () => import('@/layouts/Admin'),
		children: [
			{
				path: '',
				name: 'dashboard',
				component: Dashboard
			},
			{
				path: 'settings',
				name: 'settings',
				component: Settings
			},
			{
				path: '/:pathMatch(.*)*',
				redirect: '/error'
			},
		],
	},
	{
		path: '/error',
		//name: 'error',
		component: () => import('@/views/PageNotFound'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/error'
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
