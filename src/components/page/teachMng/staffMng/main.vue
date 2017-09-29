<template>
	<div class="staffMng main">
		<div class="staffMng-top main-top zoom">
			<div class="round lf"></div>
			<div class="staffMng-title lf">教学管理/<span class="zClr-666">员工管理</span></div>
		</div>
		<div class="staffMng-main">
			<div class="staffMng-main-title">教师信息</div>
		</div>
		<div class="search-items">
			<el-form ref="form" :model="form" label-width="56px" class="search-item">
				<el-form-item label="姓名：">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
			</el-form>
			<div class="search-item" style="padding-left:30px;">
				<el-button type="primary" class="btn-main">搜索</el-button>
			</div>
		</div>
		<div class="search-btn" style="margin-top:20px;">
			<div class="butn btn-main btn-normal" style="margin-right:20px;margin-top:5px;">添加成员</div>
			<div class="butn btn-main btn-normal" style="margin-right:20px;margin-top:5px;">批量导入</div>
			<div class="butn btn-main btn-normal" style="margin-right:20px;margin-top:5px;">批量删除</div>
			<div class="butn btn-sec input-small" style="margin-top:5px;">导出</div>
		</div>
		<div class="page" style="padding-top:20px;padding-bottom: 50px;">
			<div class="page-info">
				<el-table ref="singleTable" :data="tableData" fit border style="width: 100%" @current-change="handleCurrentChang">
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column prop="name" label="姓名" min-width="70" header-align="center"></el-table-column>
					<el-table-column prop="position" label="职位" min-width="70" header-align="center"></el-table-column>
					<el-table-column prop="class_id" label="工号" min-width="70" header-align="center"></el-table-column>
					<el-table-column prop="phone" label="手机号" min-width="70" header-align="center"></el-table-column>
					<el-table-column prop="email" label="邮箱" min-width="70" header-align="center"></el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				form:{
					name:''
				},
				tableData:[],
				currentRow:[]
			}
		},
		created() {
			this.render();
		},
		methods:{
			handleCurrentChang(val) {
				this.currentRow = val;
				console.log(val);
			},
			render(){
				let self = this;
				let access_token = JSON.parse(localStorage.getItem('access_token'));
				let data = {
					keywords:self.form.name,
					access_token:access_token
				};
				self.$http.post('/web/employee',data).then(function(data){
					console.log(data);
					if(data.data.status == 200){
						
					}
				})
			}
		}
	}
</script>

<style scoped>
	.staffMng-main-title{height:56px;line-height:56px;font-size:22px;padding-left:50px;background: url(../../../../../static/img/staff.png) no-repeat;background-position-x: left;background-position-y: 10px;}
	
</style>