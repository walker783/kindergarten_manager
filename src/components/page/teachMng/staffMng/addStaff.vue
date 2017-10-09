<template>
	<div class="addStaff main">
		<div class="tab-main">
			<div style="margin-top:30px;padding-bottom: 50px;">
				<div class="addsset-title">新增成员</div>
				<div class="addsset-main">
					<el-form ref="addMsg" :model="addMsg" :rules="rules" label-width="100px" style="padding-right:100px;">
						<el-form-item label="姓名：">
							<el-input v-model="addMsg.name" size="nomal" placeholder="请输入姓名"></el-input>
						</el-form-item>
						<el-form-item label="手机号：">
							<el-input v-model="addMsg.mobile" size="nomal" placeholder="请输入手机号"></el-input>
						</el-form-item>
						<el-form-item label="工号：">
							<el-input v-model="addMsg.jobNum" size="nomal"></el-input>
						</el-form-item>
						<el-form-item label="职位：">
							<el-select v-model="addMsg.position" placeholder="请选择职位">
								<el-option v-for="item in optiond" :label="item.departmentname" :value="item.departmentname"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="邮箱：">
							<el-input v-model="addMsg.email" size="nomal" placeholder="请输入邮箱"></el-input>
						</el-form-item>
					</el-form>
					<div class="addStaff-btn zoom">
						<el-button class="btn-main button rt" type="primary" @click="submitForm('addMsg')">提交</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
            return {
            	addMsg:{
            		name:'',
            		mobile:'',
            		jobNum:'',
            		position:'',
            		email:''
            	},
            	rules: {
					name: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					mobile: [{
						required: true,
						message: '请输入电话号码',
						trigger: 'blur'
					}],
					position: [{
						required: true,
						message: '请输入职位',
						trigger: 'blur'
					}],
					mobile: [{
						required: true,
						message: '请输入邮箱',
						trigger: 'blur'
					}]
				},
				optiond:[]
            }
        },
        methods: {
        	submitForm(addMsg){
        		var self = this;
        	}
        }
	}
</script>

<style scoped>
	.addsset-title{border-bottom: 1px solid #ccc;text-align: center;font-size: 28px;padding: 15px 0;}
	.addsset-main{width:600px;margin:0 auto;padding-top:30px;}
	.button{display: block;margin-right:100px;margin-top:10px;}
</style>