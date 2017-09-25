import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({ //department
	routes: [{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/',
			component: resolve => require(['../components/common/Home.vue'], resolve),
			children: [
				{
					path: '/approval',
					component: resolve => require(['../components/page/teachMng/approval/main.vue'], resolve),
				},
				{
					path: '/apprList',
					component: resolve => require(['../components/page/teachMng/approval/apprList.vue'], resolve),
				},
				{
					path: '/principal',
					component: resolve => require(['../components/page/teachMng/home/principal.vue'], resolve),
				},
				{
					path: '/teacher',
					component: resolve => require(['../components/page/teachMng/home/teacher.vue'], resolve),
				},
				{
					path: '/leave',
					component: resolve => require(['../components/page/teachMng/leave/main.vue'], resolve),
				},
				{
					path: '/addLeave',
					component: resolve => require(['../components/page/teachMng/leave/addLeave.vue'], resolve),
				},
				{
					path: '/staffMng',
					component: resolve => require(['../components/page/teachMng/staffMng/main.vue'], resolve),
				},
				{
					path: '/addStaff',
					component: resolve => require(['../components/page/teachMng/staffMng/addStaff.vue'], resolve),
				},
				{
					path: '/manager',
					component: resolve => require(['../components/page/permission/manager/main.vue'], resolve),
				},
				{
					path: '/addMng',
					component: resolve => require(['../components/page/permission/manager/addMng.vue'], resolve),
				},
				{
					path: '/role',
					component: resolve => require(['../components/page/permission/role/main.vue'], resolve),
				},
				{
					path: '/addRole',
					component: resolve => require(['../components/page/permission/role/addRole.vue'], resolve),
				},
				{
					path: '/gerwig',
					component: resolve => require(['../components/page/students/gerwig/main.vue'], resolve),
				},
				{
					path: '/brvbar',
					component: resolve => require(['../components/page/students/gerwig/brvbar.vue'], resolve),
				},
				{
					path: '/addGerwig',
					component: resolve => require(['../components/page/students/gerwig/addGerwig.vue'], resolve),
				},
				{
					path: '/senior',
					component: resolve => require(['../components/page/students/senior/main.vue'], resolve),
				}
			]
		},
		{
			path: '/login',
			component: resolve => require(['../components/page/Login.vue'], resolve)
		},
	]
})