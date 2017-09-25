var url = (function(){
	var mock = false;
	var prodEnv = require('./dev.env');
//	var url = process.env.API_ROOT;
	var url = 'http://jslymt.hengtiansoft.com:8081/JSLYMT/View/';
	console.log(url);
	if(mock) {
	    return {
	        MOCK: mock,
	        login:url + '/web/userAll/RegisterLoginAllcontroller/allLogin',
	        userList:'../mock/userList.json',
	        user_detail:'../mock/user_detail.json',
	        user_record:'../mock/user_detail.json', //bierende
	        develop_List: '../mock/developer_List.json',
	        develop_Black_List: '../mock/developer_Black_List.json',
	    	develop_Confirm_Price: url + '/web/admin/enterpriseadmin/UserController/confirmMoneyEnterprise',
	    	developer_deduc: url + '/web/admin/enterpriseadmin/UserController/deductEnterprise',
	    	developer_reback: url + '/web/admin/enterpriseadmin/UserController/rebackMoneyEnterprise',
	    	developer_black:url + '/web/admin/enterpriseadmin/UserController/blackOperateEnterprise',
	    	developer_force:url + '/web/admin/enterpriseadmin/UserController/permissionStatusEnterprise',
	    	developr_cancel_Black:url + '/web/admin/enterpriseadmin/UserController/rblackOperateEnterprise',
	    	res_list: '/mock/res_list.json',
	    	res_detail: '/mock/res_detail.json',
	    	res_hot: '/mock/res_hot.json',
	    	res_record_list:'/mock/res_record_list.json',
	    	zchang_list:'/mock/zchang_list.json',
	    	zchang_hot:'/mock/zchang_hot.json',
	    	zchang_detail:'/mock/zchang_detail.json',
	    	check_res_list:'/mock/check_res_list.json',
	    	check_res_detail:'/mock/check_res_detail.json',
	    	check_res_pass:'/mock/check_res_pass.json',
	    	check_show_list:'/mock/check_show_list.json',
	    	check_show_detail:'/mock/check_show_detail.json',
	    	check_show_res:'/mock/check_show_res.json',
	    	check_show_pass:'/mock/check_show_pass.json',
	    	check_deve_list:'/mock/check_deve_list.json',
	    	check_deve_detail:'/mock/check_deve_detail.json',
	    	check_deve_pass:'/mock/check_deve_pass.json',
	    	check_user_list:'/mock/check_user_list.json',
	    	check_user_detail:'/mock/check_user_detail.json',
	    	check_user_pass:'/mock/check_user_pass.json',
	    	admin:'/mock/adminlist.json',
	    	addAdmin:'/mock/adminlist.json',  //jia
	    	addRole:'/mock/adminlist.json',   //jia
	    	changeAdmin:'/mock/adminlist.json', //jia
	    	deleteAdmin:'/mock/adminlist.json', //jia
	    	bannerUpload:'/mock/bannerUpload.json',
	    	getbannerList:'/mock/bannerlist.json',
	    	bannerDelete:'/mock/bannerDelete.json',
	    	bannerChange:'/mock/bannerChange.json',
	    	logoUpload: '/mock/logoUpload.json',
	    	showLogo:'/mock/logoUpload.json',  //jiebierende
			hotTag: '/mock/logoUpload.json',  //jiebierende
			addTag:  '/mock/logoUpload.json',  //jiebierende
			orderList: '/mock/orderList.json', 
			surePay:'/mock/orderList.json', //jie
			fundRecord:'/mock/fundRecord.json',
			reportList:'/mock/fundRecord.json', //jia
	    };	
	}
	else{
		return {
		    MOCK: mock,
			/**精视传媒的url配置***/
			//初始化菜单
			menulist:url + 'SM/MenuDefinitionView/menulist',//初始化菜单选项
			initMenu:url + 'SM/Login/initMenu',//初始化菜单选项
			//城市、客户类型等下拉列表
			getlistbytypeIdlist:url + 'SM/getlistbytypeIdlist',//通过typeId获取数据
			getAreaByCity:url + 'SM/getAreaByCity',//根据城市获取城区
			getProviderList:url + 'SM/getProviderList',//物业公司
			//字典管理
			dictlist_all:url + 'SM/DictionaryView/dictlist',//字典模块通用
			subdict_list:url + 'SM/DictionaryView/subdictlist',//字典子页面数据
			create_one:url + 'SM/DictionaryView/createone',//新增一条数据
			initsuper_list:url + 'SM/DictionaryView/initsuper',//新增数据时的上级选择列表
			update_one:url + 'SM/DictionaryView/updateone',//修改右侧数据
			remove_one:url + 'SM/DictionaryView/removeone',//右侧删除数据接口
			remarklist:url + 'SM/DictionaryView/remarklist',//下拉模块选项
			//员工管理
			staff_list:url + 'SM/EmployView/stafflist',//员工列表
			addoneemployee:url + 'SM/EmployView/addoneemployee',//新增员工
			removeone_y:url + 'SM/EmployView/removeone',//删除一个员工
			retire_one:url + 'SM/EmployView/retireone',//员工离职
			deptlist:url + 'SM/EmployView/deptlist',//部门下拉框
			changeoneemployee:url + 'SM/EmployView/changeoneemployee',//修改员工
			listemployee:url + 'SM/EmployView/listemployee',//根据部门查询员工
			adminresetpassword:url + 'SM/EmployView/adminresetpassword',//重置员工密码
			//功能定义
			functionlist:url + 'SM/MenuDefinitionView/functionlist',//树形结构列表http://172.17.128.200:8080/JSLYMT/View/SM/MenuDefinitionView/functionlist
			createone_f:url + 'SM/MenuDefinitionView/createOne',//新增
			removeoneorlist:url + 'SM/MenuDefinitionView/removeOneOrlist',//删除一个
			updateone_f:url + 'SM/MenuDefinitionView/updateone',//更新
			//部门管理
			listdepartment:url + 'SM/DepetmentView/listdepartment',//部门管理左右列表
			createone_d:url + 'SM/DepetmentView/createone',//新增部门
			updateone_d:url + 'SM/DepetmentView/updateone',//部门修改
			deleteone_d:url + 'SM/DepetmentView/deleteone',//删除部门
			//权限分配
			permsearchrightview:url + 'SM/RightsManageView/permsearchrightview',//员工列表
			permsearchdownview:url + 'SM/RightsManageView/permsearchdownview',//员工所拥有的列表
			deptalllist:url + 'SM/RightsManageView/deptalllist',//条件部门选择
			funclist:url + 'SM/RightsManageView/funclist',//所有功能ztree列表
			permaddcityview:url + '/SM/RightsManageView/permaddcityview',//添加权限所有城市
			editfunclist:url + 'SM/RightsManageView/editfunclist',//以选中功能
			editcitylist:url + 'SM/RightsManageView/editcitylist',//以选中的城市
			removeperm:url + 'SM/RightsManageView/removeperm',//
			copyPermission:url + 'SM/RightsManageView/copyPermission',//复制权限
			//登陆及密码修改
			doLogin:url + 'SM/Login/doLogin',//登陆
			changePassword:url + 'SM/PasswordEditView/changePassword',//修改密码
			//我的供应商
			MyProviderView:url + 'MRM/MyProviderView',//我的供应商列表
			DeptProviderView:url + 'MRM/DeptProviderView',//部门供应商
			CityProviderView:url + 'MRM/CityProviderView',//城市供应商
			contactInfoRightBottom:url + 'MRM/MyProviderView/contactInfoRightBottom',//联系人and开户信息右下
			updateSupplier:url + 'MRM/updateSupplier',//更新联系人
			deleteProvider:url + 'MRM/deleteProvider',//删除客户信息
			//电梯管理
			MyProjectView:url + 'ERM/MyProjectView',//我的电梯项目
			addOneMyProject:url + 'ERM/MyProjectView/addOneMyProject',//新增一个
			changeOneMyProject:url + 'ERM/MyProjectView/changeOneMyProject',//修改一个
			DeptProjectView:url + 'ERM/DeptProjectView',//部门审核项目
			changeOperator:url + 'ERM/CityProjectView/changeOperator',//更改操作人员
			changeLevel:url + 'ERM/CityProjectView/changeLevel',//更改项目级别
			changeReject:url + 'ERM/CityProjectView/changeReject',//驳回项目
			changeDeveloper:url + 'ERM/CityProjectView/changeDeveloper',//分配以更改开发人员
			CityProjectView:url + 'ERM/CityProjectView',//城市审核项目
			//我的合同
			MyContractView:url + 'PCM/MyContractView',//我的合同列表数据
			deleteContract:url + 'PCM/MyContractView/deleteContract',//删除我的合同
			myContractRightView:url + 'PCM/MyContractView/myContractRightView',//购买的媒体位数
			ProjectOverview:url + 'PCM/MyContractView/ProjectOverview',//项目概况
			//城市审核合同
			DeptContractView:url + 'PCM/DeptContractView',//城市审核合同右上数据
			updateMaintenanceStaff:url + 'PCM/DeptContractView/updateMaintenanceStaff',//分配
			//权限组管理
			getGroupList:url + 'SM/GroupView/getGroupList',//权限组列表
			groupFuncList:url + 'SM/GroupView/groupFuncList',//权限组所有
			addGroupFuncList:url + 'SM/GroupView/addGroupFuncList',//新增一个权限
			editGroupFuncList:url + 'SM/GroupView/editGroupFuncList',//修改一个权限
			//发票管理
			InvoiceManagerView:url + 'PCM/InvoiceManagerView',//发票管理右侧数据
			updateOneGroup:url + 'PCM/InvoiceManagerView/updateOne',//发票管理
		}
//		return {
//		    MOCK: mock,
////			/**精视传媒的url配置***/
//			//初始化菜单
//			menulist:url + 'SM/MenuDefinitionView/menulist',//初始化菜单选项
//			initMenu:url + 'SM/Login/initMenu',//初始化菜单选项
//			//城市、客户类型等下拉列表
//			getlistbytypeIdlist:url + 'SM/getlistbytypeIdlist',//通过typeId获取数据
//			getAreaByCity:url + 'SM/getAreaByCity',//根据城市获取城区
//			getProviderList:url + 'SM/getProviderList',//物业公司
//			//字典管理
//			dictlist_all:url + 'SM/DictionaryView/dictlist',//字典模块通用
//			subdict_list:url + 'SM/DictionaryView/subdictlist',//字典子页面数据
//			create_one:url + 'SM/DictionaryView/createone',//新增一条数据
//			initsuper_list:url + 'SM/DictionaryView/initsuper',//新增数据时的上级选择列表
//			update_one:url + 'SM/DictionaryView/updateone',//修改右侧数据
//			remove_one:url + 'SM/DictionaryView/removeone',//右侧删除数据接口
//			remarklist:url + 'SM/DictionaryView/remarklist',//下拉模块选项
//			//员工管理
//			staff_list:url + 'SM/EmployView/stafflist',//员工列表
//			addoneemployee:url + 'SM/EmployView/addoneemployee',//新增员工
//			removeone_y:url + 'SM/EmployView/removeone',//删除一个员工
//			retire_one:url + 'SM/EmployView/retireone',//员工离职
//			deptlist:url + 'SM/EmployView/deptlist',//部门下拉框
//			changeoneemployee:url + 'SM/EmployView/changeoneemployee',//修改员工
//			listemployee:url + 'SM/EmployView/listemployee',//根据部门查询员工
//			//功能定义
//			functionlist:url + 'SM/MenuDefinitionView/functionlist',//树形结构列表http://172.17.128.200:8080/JSLYMT/View/SM/MenuDefinitionView/functionlist
//			createone_f:url + 'SM/MenuDefinitionView/createOne',//新增
//			removeoneorlist:url + 'SM/MenuDefinitionView/removeOneOrlist',//删除一个
//			updateone_f:url + 'SM/MenuDefinitionView/updateOne',//更新
//			//部门管理
//			listdepartment:url + 'SM/DepetmentView/listdepartment',//部门管理左右列表
//			createone_d:url + 'SM/DepetmentView/createone',//新增部门
//			updateone_d:url + 'SM/DepetmentView/updateone',//部门修改
//			deleteone_d:url + 'SM/DepetmentView/deleteone',//删除部门
//			//权限分配
//			permsearchrightview:url + 'SM/RightsManageView/permsearchrightview',//员工列表
//			permsearchdownview:url + 'SM/RightsManageView/permsearchdownview',//员工所拥有的列表
//			deptalllist:url + 'SM/RightsManageView/deptalllist',//条件部门选择
//			funclist:url + 'SM/RightsManageView/funclist',//所有功能ztree列表
//			permaddcityview:url + 'SM/RightsManageView/permaddcityview',//添加权限所有城市
//			editfunclist:url + 'SM/RightsManageView/editfunclist',//以选中功能
//			editcitylist:url + 'SM/RightsManageView/editcitylist',//以选中的城市
//			removeperm:url + 'SM/RightsManageView/removeperm',//
//			copyPermission:url + 'SM/RightsManageView/copyPermission',//复制权限
//			//登陆及密码修改
//			doLogin:url + 'SM/Login/doLogin',//登陆SM/Login/doLogin
//			changePassword:url + 'SM/PasswordEditView/changePassword',//修改密码
//			//我的供应商
//			MyProviderView:url + 'MRM/MyProviderView',//我的供应商列表
//			DeptProviderView:url + 'MRM/DeptProviderView',//部门供应商
//			CityProviderView:url + 'MRM/CityProviderView',//城市供应商
//			contactInfoRightBottom:url + 'MRM/MyProviderView/contactInfoRightBottom',//联系人and开户信息右下
//			updateSupplier:url + 'MRM/updateSupplier',//更新联系人
//			deleteProvider:url + 'MRM/deleteProvider',//删除客户信息
//			//电梯管理
//			MyProjectView:url + 'ERM/MyProjectView',//我的电梯项目
//			addOneMyProject:url + 'ERM/MyProjectView/addOneMyProject',//新增一个
//			changeOneMyProject:url + 'ERM/MyProjectView/changeOneMyProject',//修改一个
//			//权限组管理
//			getGroupList:url + 'SM/GroupView/getGroupList',//权限组列表
//			groupFuncList:url + 'SM/GroupView/groupFuncList',//权限组所有
//		}
	}
})();

module.exports = url;