import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({ //department
	routes: [{
			path: '/',
			redirect: '/login'//登录
		},
		{
			path: '/',
			component: resolve => require(['../components/common/Home.vue'], resolve),
			children: [
				{
					path: '/approval',//审批
					component: resolve => require(['../components/page/teachMng/approval/main.vue'], resolve),
				},
				{
					path: '/apprList',//待我审批
					component: resolve => require(['../components/page/teachMng/approval/apprList.vue'], resolve),
				},
				{
					path: '/apprPerson',//审核审批
					component: resolve => require(['../components/page/teachMng/approval/apprPerson.vue'], resolve),
				},
				{
					path: '/apprListed',//我已审批
					component: resolve => require(['../components/page/teachMng/approval/apprListed.vue'], resolve),
				},
				{
					path: '/principal',//园长首页
					component: resolve => require(['../components/page/teachMng/home/principal.vue'], resolve),
				},
				{
					path: '/teacher',//教师首页
					component: resolve => require(['../components/page/teachMng/home/teacher.vue'], resolve),
				},
				{
					path: '/leave',//请假记录
					component: resolve => require(['../components/page/teachMng/leave/main.vue'], resolve),
				},
				{
					path: '/addLeave',//在线申请请假
					component: resolve => require(['../components/page/teachMng/leave/addLeave.vue'], resolve),
				},
				{
					path: '/staffMng',//员工管理
					component: resolve => require(['../components/page/teachMng/staffMng/main.vue'], resolve),
				},
				{
					path: '/addStaff',//新增、修改成员
					component: resolve => require(['../components/page/teachMng/staffMng/addStaff.vue'], resolve),
				},
				{
					path: '/manager',//权限管理
					component: resolve => require(['../components/page/permission/manager/main.vue'], resolve),
				},
				{
					path: '/addMng',//添加管理员
					component: resolve => require(['../components/page/permission/manager/addMng.vue'], resolve),
				},
				{
					path: '/role',//角色列表
					component: resolve => require(['../components/page/permission/role/main.vue'], resolve),
				},
				{
					path: '/addRole',//新增角色
					component: resolve => require(['../components/page/permission/role/addRole.vue'], resolve),
				},
				{
					path: '/gerwig',//新生信息
					component: resolve => require(['../components/page/students/gerwig/main.vue'], resolve),
				},
				{
					path: '/brvbar',//新生分班
					component: resolve => require(['../components/page/students/gerwig/brvbar.vue'], resolve),
				},
				{
					path: '/addGerwig',//新增新生信息
					component: resolve => require(['../components/page/students/gerwig/addGerwig.vue'], resolve),
				},
				{
					path: '/senior',//全部学生信息
					component: resolve => require(['../components/page/students/senior/main.vue'], resolve),
				},
				{
					path: '/test',//测试
					component: resolve => require(['../components/page/test.vue'], resolve),
				}
			]
		},
		{
			path: '/login',//登录
			component: resolve => require(['../components/page/Login.vue'], resolve)
		},
	]
})