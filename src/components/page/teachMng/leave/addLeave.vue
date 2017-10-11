<template>
	<div class="addleave main">
		<div class="addleave-top main-top zoom">
			<div class="round lf"></div>
			<div class="addleave-title lf">教学管理/<span class="zClr-666">在线申请请假</span></div>
		</div>
		<div class="addleave-main" style="padding-bottom: 50px;">
			<el-form :inline="true" :model="leave" :rules="rules">
				<el-form-item label="姓名：" prop="name" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.name" size="nomal" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="职位：" class="search-item" style="margin-right:30px;">
					<el-select v-model="leave.position" placeholder="请选择职位">
						<el-option v-for="item in optiond" :label="item.departmentname" :value="item.departmentname"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="开始时间：" class="search-item" style="margin-right:30px;">
					<el-date-picker type="date" placeholder="选择日期" v-model="leave.name"></el-date-picker>
				</el-form-item>
				<el-form-item label="结束时间：" class="search-item" style="margin-right:30px;">
					<el-date-picker type="date" placeholder="选择日期" v-model="leave.name"></el-date-picker>
				</el-form-item>
				<el-form-item label="请假天数：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.name" size="nomal" placeholder="输入请假天数"></el-input>
				</el-form-item>
				<el-form-item label="请假类别：" class="search-item" style="margin-right:30px;">
					<el-select v-model="leave.name" placeholder="请选择请假类别">
						<el-option v-for="item in optiond" :label="item.departmentname" :value="item.departmentname"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="备注" class="search-item">
			    	<el-input type="textarea" v-model="leave.name" style="width:600px;min-height:40px;"></el-input>
			  	</el-form-item>
			</el-form>
			<div class="search-item">
				<button class="butn btn-main btn-normal">上传附件</button>
			</div>
			<div class="addStaff-btn" style="margin-top:50px;">
				<el-button class="button btn-dis" type="primary" :disabled="true" @click="submitForm('leave')">提交</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
            return {
            	leave:{
            		name:'',
            		position:''
            	},
            	rules: {
					name: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					position: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
				},
				optiond:[]
            }
       }
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