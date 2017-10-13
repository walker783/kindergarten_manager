<template>
	<div class="addleave main">
		<div class="addleave-top main-top zoom">
			<div class="round lf"></div>
			<div class="addleave-title lf">教学管理/<span class="zClr-666">审批</span></div>
		</div>
		<div class="addleave-main" style="padding-bottom: 50px;">
			<el-form :inline="true" :model="leave">
				<el-form-item label="姓名：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.multi_name" disable="disable" size="nomal" :value="leave.multi_name"></el-input>
				</el-form-item>
				<el-form-item label="职位：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.multi_type" disable="disable" size="nomal" :value="leave.multi_type"></el-input>
				</el-form-item>
				<el-form-item label="开始时间：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.sta_time" disable="disable" size="nomal" :value="leave.sta_time"></el-input>
				</el-form-item>
				<el-form-item label="结束时间：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.end_time" disable="disable" size="nomal" :value="leave.end_time"></el-input>
				</el-form-item>
				<el-form-item label="请假天数：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.days" disable="disable" size="nomal" :value="leave.days"></el-input>
				</el-form-item>
				<el-form-item label="请假类别：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.leave_type" disable="disable" size="nomal" :value="leave.leave_type"></el-input>
				</el-form-item>
				<el-form-item label="备注" class="search-item">
			    		<el-input type="textarea" v-model="leave.name" style="width:600px;min-height:40px;"></el-input>
			    </el-form-item>
			</el-form>
			<div class="addStaff-btn" style="margin-top:50px;">
				<el-button class="button btn-main lt" type="primary"  @click="approve">批准</el-button>				
				<el-button class="button btn-main rt" type="primary"  @click="noApprove">不批准</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
            return {
	            	leave:{
	            		multi_name:'',
	            		multi_type:'',
	            		sta_time:'',
	            		end_time:'',
	            		days:'',
	            		leave_type:''
	            	},
            }
       },
       methods:{
       	   noApprove(){
       	   	let self = this;
				self.$router.push('/apprList');
       	   },
       	   approve(){
	       	    let self = this;
	        		let leave_id = self.$route.query.leave_id;
	    		    let data = {
					leave_id:leave_id
				};
				self.$http.post('/web/myApproveRecord',data).then(function(data){
					self.tableData = data.data.list;
					console.log(data.data.list);
				})
       	   },
       },
       
       created:function () {
        		let self = this;
        		let leave_id = self.$route.query.leave_id;
    		    alert(leave_id);
		},
	}
</script>

<style scoped>
	.addleave-main{padding-left:30px;}
	.search-item{padding-top:30px;}
	.input-normal{width:200px;}
	.appr-note{width:400px;min-height:150px;border:1px solid #ccc;border-radius: 4px;padding:10px 20px;}
	.el-form-item{margin-bottom: 0;}
	.button{display: block;margin:0 auto;}
</style>