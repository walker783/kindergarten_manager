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
					<el-input v-model="form.name" placeholder="模糊查询"></el-input>
				</el-form-item>
			</el-form>
			<div class="search-item" style="padding-left:30px;">
				<el-button type="primary" class="btn-main" @click="render(1)">搜索</el-button>
			</div>
		</div>
		<div class="search-btn" style="margin-top:20px;">
			<div class="butn btn-main btn-normal operation" @click="addMng">添加成员</div>
			<div class="butn btn-main btn-normal operation">批量导入</div>
			<div class="butn btn-main btn-normal operation" @click="del">批量删除</div>
			<div class="butn btn-sec input-small operation" @click="educe">导出</div>
		</div>
		<div class="page" style="padding-top:20px;padding-bottom: 20px;">
			<div class="page-info" id="app">
				<el-table ref="singleTable" :data="tableData" fit border style="width: 100%;" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column prop="name" label="姓名" header-align="center"></el-table-column>
					<el-table-column prop="position" label="职位" header-align="center"></el-table-column>
					<el-table-column prop="job_number" label="工号" header-align="center"></el-table-column>
					<el-table-column prop="phone" label="手机号" header-align="center"></el-table-column>
					<el-table-column prop="email" label="邮箱" header-align="center"></el-table-column>
					<el-table-column prop="clbum" label="所带班级" header-align="center"></el-table-column>
				</el-table>
				<div class="pagination zoom">
					<el-pagination @current-change="handleCurrentChange" :current-page="cur_page" layout="prev, pager, next" :total="totalpages" class="rt">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				form:{
					name:null
				},
				tableData:[],
				multipleSelection:[],
				currentRow:[],
				cur_page:1,
				totalpages:100,
				id:[]
			}
		},
		created() {
			this.render(1);
		},
		methods:{
			handleCurrentChange(val) {
				this.cur_page = val;
				this.render(val);
			},
			handleCurrentChang(val) {
				this.currentRow = val;
			},
			handleSelectionChange(val){
				this.multipleSelection = val;
			},
			render(num){
				let self = this;
				self.cur_page = num;
				let access_token = JSON.parse(localStorage.getItem('access_token'));
				let data = {
					page:num,
					keywords:self.form.name,
					access_token:access_token
				};
				self.$http.post('/web/employee',data).then(function(data){
					console.log(data);
					if(data.data.status == 200){
						self.tableData = data.data.data.data;
						let total = data.data.data.total+'0';
						self.totalpages = parseInt(total);
					}
				})
			},
			addMng(){
				let self = this;
				self.$router.push('/addStaff?type=add');
			},
			del(){
				let self = this;
				console.log(self.multipleSelection);
				let multipleSelection = self.multipleSelection;
				multipleSelection.forEach(function(item,index){
					self.id.push(item.id);
				});
				console.log(self.id);
				let data = {
					access_token:JSON.parse(localStorage.getItem('access_token')),
					id:self.id
				}
				let popup = self.$createElement;
				self.$msgbox({
					title:'测试',
					message:popup('p',null,'确定删除？'),
					showCancelButton: true,
					confirmButtonText: '确定',
          			cancelButtonText: '取消'
				});
//				self.$http.post('/web/employee/delete',data).then(function(data){
//					console.log(data);
//					if(data.data.status == 200){
//						
//					}
//				})
			},
			educe(){
				let self = this;
				let data = {
					keywords:self.form.name,
					access_token:JSON.parse(localStorage.getItem('access_token'))
				};
				window.open('/web/employee/export?keywords='+self.form.name+'&access_token='+JSON.parse(localStorage.getItem('access_token')));
			}
		}
	}
</script>

<style scoped>
	.staffMng-main-title{height:56px;line-height:56px;font-size:22px;padding-left:50px;background: url(../../../../../static/img/staff.png) no-repeat;background-position-x: left;background-position-y: 10px;}
	.el-pagination{padding:20px 0;}
	.operation{margin-top:5px;margin-left:20px;}
</style>