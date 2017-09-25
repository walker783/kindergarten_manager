<template>
	<div class="login-bg">
		<div class="login-main">
			<div class='login-title'>用户登录</div>
			<div class="login-name login-input">
				<input type="text" id="name" />
			</div>
			<div v-show="nameErr" class="error" v-bind="nameErrmsg"></div>
			<div class="login-pwd login-input">
				<input type="text" id="pwd" />
			</div>
			<div v-show="nameErr" class="error" v-bind="nameErrmsg"></div>
			<button class="button">登录</button>
			<div class="login-bj"></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.login-bg{position:fixed;top:0;left:0;width:100%;height:100%;background: url(../../../static/img/banner.jpg) no-repeat;background-size: cover;}
	/*.login-bj{position:absolute;top:0px;right:0px;width:100%;height:100%;background: #000;opacity:0.3;}*/
	.login-main{position:absolute;top:150px;right:100px;width:460px;padding:20px;background: #000;opacity:0.3;}
	.login-title{height:40px;line-height:40px;text-align: center;color:#fff;font-size: 18px;letter-spacing: 4px;}
	.login-input{width:100%;background: #fff;padding-left:55px;height:56px;line-height:56px;border:1px solid #fff;margin-top:10px;}
	.login-input input{display:inline-block;width:100%;color:#000;height:30px;line-height:30px;font-size: 30px;margin:13px 0;}
	.login-name{background-image: url(../../../static/img/login-name.png);background-repeat: no-repeat;background-position-y: center;background-position-x: 15px;background-size: 25px;}
	.login-pwd{background-image: url(../../../static/img/login-pwd.png);background-repeat: no-repeat;background-position-y: center;background-position-x: 15px;background-size: 25px;}
	.error{height:30px;line-height:30px;color:#e5233f;padding-left:10px;}
	.button{width:100%;height:56px;line-height:56px;letter-spacing: 4px;color:#fff;background: #f7d359;margin:25px 0 30px;font-size:30px;border-style: none;}
</style>
