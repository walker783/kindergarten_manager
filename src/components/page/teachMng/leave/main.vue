<template>
	<div class="leave main">
		<div class="leave-top main-top zoom">
			<div class="round lf"></div>
			<div class="leave-title lf">教学管理/<span class="zClr-666">员工请假记录</span></div>
		</div>
		<div class="search-btn" style="margin-top:20px;">
			<div class="butn btn-sec input-small" style='margin-top:5px;'>导出</div>
		</div>
		<div class="page" style="padding-top:20px;padding-bottom: 20px;">
			<div class="page-info">
				<el-table ref="singleTable" :data="tableData" fit border style="width: 100%;">
					<el-table-column prop="name" label="姓名" header-align="center"></el-table-column>
					<el-table-column prop="jobT" label="职位" header-align="center"></el-table-column>
					<el-table-column prop="job_number" label="工号" header-align="center"></el-table-column>
					<el-table-column prop="phone" label="手机号" header-align="center"></el-table-column>
					<el-table-column prop="email" label="邮箱" header-align="center"></el-table-column>
					<el-table-column prop="clbum" label="所带班级" header-align="center"></el-table-column>
					<el-table-column label="操作" header-align="center">
				      	<template scope="scope">
					        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				      	</template>
				    </el-table-column>
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
				tableData:[],
				cur_page:1,
				totalpages:100
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
			render(num){
				let self = this;
				self.cur_page = num;
				let access_token = JSON.parse(localStorage.getItem('access_token'));
//				let data = {
//					page:num,
//					keywords:self.form.name,
//					access_token:access_token
//				};
//				self.$http.post('/web/employee',data).then(function(data){
//					console.log(data);
//					if(data.data.status == 200){
//						self.tableData = data.data.data.data;
//						let total = data.data.data.total+'0';
//						self.totalpages = parseInt(total);
//					}
//				})
			},
			educe(){
				let self = this;
//				let data = {
//					keywords:self.form.name,
//					access_token:JSON.parse(localStorage.getItem('access_token'))
//				};
//				let access_token = JSON.parse(localStorage.getItem('access_token'));
//				access_token = access_token.replace('\+','+');
//				console.log(access_token);
//				window.open('/web/employee/export?keywords='+self.form.name);
				//self.$http.post('/web/employee/export',data).then(function(data){})
			}
		}
	}
</script>

<style>
</style>