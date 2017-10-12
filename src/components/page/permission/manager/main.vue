<template>
	<div class="manage main">
		<div class="manage-top main-top zoom">
			<div class="round lf"></div>
			<div class="manage-title lf">权限管理/<span class="zClr-666">管理员列表</span></div>
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
			<div class="butn btn-main btn-normal" style="margin-top:5px;" @click="addMng">添加成员</div>
		</div>
		<div class="page" style="padding-top:20px;padding-bottom: 50px;">
			<div class="page-info">
				<el-table ref="singleTable" :data="tableData" fit border style="width: 100%;" @selection-change="handleSelectionChange">
					<el-table-column prop="name" label="用户名" header-align="center"></el-table-column>
					<el-table-column prop="role" label="角色" header-align="center"></el-table-column>
					<el-table-column prop="phone" label="手机号" header-align="center"></el-table-column>
					<el-table-column prop="create_time" label="最后登录时间" header-align="center"></el-table-column>
					<el-table-column label="操作" header-align="center">
				      	<template scope="scope">
				      		<el-button size="small" @click="handleEdit(scope.$index, scope.row)">角色分配</el-button>
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
				form:{
					name:''
				},
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
			handleSelectionChange(val){
				this.multipleSelection = val;
			},
			render(num){
				let self = this;
				self.cur_page = num;
				let data = {
					page:num,
					keywords:self.form.name
				};
				self.$http.post('/web/adminmanager',data).then(function(data){
					if(data.data.status == 200){
						self.tableData = data.data.manager_list;
						let total = data.data.last_page+'0';
						self.totalpages = parseInt(total);
					}
				});
			},
			addMng(){
				let self = this;
				self.$router.push('/addMng?type=add');
			}
		}
	}
</script>

<style>
</style>