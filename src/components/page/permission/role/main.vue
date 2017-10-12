<template>
	<div class="role main">
		<div class="role-top main-top zoom">
			<div class="round lf"></div>
			<div class="role-title lf">权限管理/<span class="zClr-666">角色列表</span></div>
		</div>
		<div class="search-btn" style="margin-top:20px;">
			<div class="butn btn-main btn-normal" style="margin-top:5px;" @click="addMng">添加角色</div>
		</div>
		<div class="page" style="padding-top:20px;padding-bottom: 50px;">
			<div class="page-info">
				<el-table ref="singleTable" :data="tableData" fit border style="width: 100%;" @selection-change="handleSelectionChange">
					<el-table-column prop="name" label="角色名" header-align="center"></el-table-column>
					<el-table-column prop="role" label="描述" header-align="center"></el-table-column>
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
					page:num
				};
				self.$http.post('/web/role',data).then(function(data){
//					console.log(data);
//					if(data.data.status == 200){ 
//						self.tableData = data.data.data.data;
//						let total = data.data.data.total+'0';
//						self.totalpages = parseInt(total);
					//}
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