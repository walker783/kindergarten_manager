<template>
	<div class="addStaff main">
		<div class="tab-main">
			<div style="margin-top:30px;padding-bottom: 50px;">
				<div class="addsset-title">{{ typename }}</div>
				<div class="addsset-main">
					<el-form ref="addMsg" :model="addMsg" :rules="rules" label-width="100px" style="padding-right:100px;">
						<el-form-item label="姓名：">
							<el-input v-model="addMsg.name" size="nomal" placeholder="请输入姓名"></el-input>
						</el-form-item>
						<el-form-item label="手机号：">
							<el-input v-model="addMsg.phone" size="nomal" placeholder="请输入手机号"></el-input>
						</el-form-item>
						<el-form-item label="工号：">
							<el-input v-model="addMsg.job_number" size="nomal"></el-input>
						</el-form-item>
						<el-form-item label="职位：">
							<el-select v-model="addMsg.position" placeholder="请选择职位">
								<el-option v-for="item in optiond" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="邮箱：">
							<el-input v-model="addMsg.email" size="nomal" placeholder="请输入邮箱"></el-input>
						</el-form-item>
					</el-form>
					<div class="addStaff-btn zoom">
						<el-button v-show="buttonAdd" class="btn-main button rt" type="primary" @click="submitForm('addMsg')">提交</el-button>						
						<el-button v-show="buttonUpdata" class="btn-main button lt" type="primary" @click="submitForm('updataMsg')">提交</el-button>
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
            		phone:'',
            		job_number:'',
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
					myPosition: [{
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
				optiond:[],
				typename:'',
				buttonUpdata:false,
				buttonAdd:true
            }
        },
        created:function () {
        		let self = this;
        		let type = self.$route.query.type,
        		    access_token = JSON.parse(localStorage.getItem('access_token'));
        		let data = {
				access_token:access_token
			};
			if(type == 'add'){
				self.typename = '新增成员';
				self.buttonUpdata = false;
				self.buttonAdd=true;
			}else{
				self.typename = '修改成员信息';
				self.buttonUpdata=true;
				self.buttonAdd=false;
			}
			self.$http.post('/web/employee/save',data).then(function(data){
					self.optiond =data.data.data.position;
				})
		},
        methods: {        	    
        		submitForm(addMsg){
        			let self = this;
        			let access_token = JSON.parse(localStorage.getItem('access_token'));
        			let data={
        				access_token:access_token,
        				name : self.addMsg.name,
        				phone : self.addMsg.phone,
        				job_number : self.addMsg.job_number,
        				position : self.addMsg.position,
        				email : self.addMsg.email
        			};
	        		self.$http.post('/web/employee/save',data).then(function(data){
	        			console.log(data);
	        		})
        		},
        		submitForm(updataMsg){
        			let self = this;
        			let id = self.$route.query.id,
        				access_token = JSON.parse(localStorage.getItem('access_token'));
        			let data={
        				id:id,
        				access_token:access_token,
        				phone : self.addMsg.phone,
        				position : self.addMsg.position,
        				email : self.addMsg.email
        			};
	        		self.$http.post('/web/employee/update/id',data).then(function(data){
	        			console.log(data);
	        		})
        		}
        }
	}
</script>

<style scoped>
	.addsset-title{border-bottom: 1px solid #ccc;text-align: center;font-size: 28px;padding: 15px 0;}
	.addsset-main{width:600px;margin:0 auto;padding-top:30px;}
	.button{display: block;margin-right:100px;margin-top:10px;}
</style>