<template>
	<div class="apprList main">
		<div class="approval-top main-top zoom">
			<div class="round lf"></div>
			<div class="approval-title lf">教学管理/<span class="zClr-666">审批</span></div>
		</div>
		<div class="apprList-tab">
			<ul class="zoom ftSize-16 zClr-999" style="margin-bottom: 0;">
				<li class="lf active">待我审批</li>
				<li class="lf" @click="apprListed">我已审批</li>
			</ul>
		</div>
		<div class="page" style="padding-top:20px;padding-bottom: 50px;">
			<div class="page-info" id="app">
				<el-table ref="singleTable" :data="tableData" fit border style="width: 100%;">
					<el-table-column prop="create_time" label="申请时间" header-align="center"></el-table-column>
					<el-table-column prop="create_time" label="内容" header-align="center"></el-table-column>
					<el-table-column label="操作" header-align="center">
						<template scope="scope">					        
					        <el-button @click.native.prevent="handleApprove(scope.$index, tableData)" type="text" size="small">去审批</el-button>
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
				totalpages:10
			}
		},
       created:function () {
        		this.render(1);
		},
       methods:{
       		apprListed(){
       			let self = this;
				self.$router.push('/apprListed');
       		},
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
				};
				self.$http.post('/web/approveWait').then(function(data){
					self.tableData = data.data.list;
					//self.content = self.tableData.multi_name +"-"+  self.tableData.leave_type;
					console.log(data.data.list);
					//console.log(data.data.list[0].multi_name);	
				})
			},
			handleApprove(index, rows){
				let self = this;
				let id = rows[0].id;
				self.$router.push('/apprPerson?leave_id='+id);
				//alert(rows[0].id);
			},
       }
	}
</script>

<style scoped>
	.apprList-tab ul{padding-top:5px;}
	.apprList-tab ul li{width:80px;text-align: center;height:40px;line-height:40px;margin:0 15px;cursor: pointer;}
	.active{color:#333;border-bottom: 1px solid #333;}
	.apprList-tab ul li:hover{color:#333;border-bottom: 1px solid #333;}
</style>