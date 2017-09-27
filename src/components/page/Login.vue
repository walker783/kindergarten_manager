<template>
	<div class="login-bg">
		<div class="login-main">
			<div class='login-title'>用户登录</div>
			<div class="login-msg">
				<el-form ref="login" :model="login":rules="rules" label-width="0">
					<el-form-item prop="name">
						<el-input v-model="login.name" size="large" placeholder="请输入用户手机号"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="login.password" size="large" placeholder="请输入密码"></el-input>
					</el-form-item>
					<div class="login-btn">
						<el-button class="button" type="primary" @click="submitForm('login')">登录</el-button>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
            return {
            	login:{
            		name:'',
            		password:''
            	},
            	rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
            }
        },
        methods: {
        	submitForm(login){
        		var self = this;
        		if(self.login.name == ''||self.login.password == ''){
        			self.$message('用户名和密码不能为空');
        			return;
        		}else{
        			self.$http.post('/web/login?phone='+self.login.name+'&password='+self.login.password).then(function(data){
        			console.log(data);
        			});
        		}
        	}
        }
	}
</script>

<style scoped>
	.login-bg{width:100%;height:100%;background: url(../../../static/img/banner.jpg) no-repeat;background-size: cover;}
	.login-main{position:absolute;top:150px;right:100px;width:460px;padding:20px;background: #000;opacity:0.3;}
	.login-title{height:40px;line-height:40px;text-align: center;color:#fff;font-size: 18px;letter-spacing: 4px;}
	.login-input{background: #fff;padding-left:55px;height:56px;line-height:56px;border:1px solid #fff;margin-top:10px;}
	.button{width:100%;height:56px;letter-spacing: 4px;color:#fff;background: #f7d359;margin:25px 0 30px;font-size:30px;border-style: none;}
</style>
