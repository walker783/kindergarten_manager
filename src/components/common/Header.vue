<template>
	<header>
		<div class="bg-333745 top zoom">
			<div class="logo lf"></div>
			<div class="top-main lf">
				<div class="top-title lf">幼儿后台管理系统</div>
				<div class="top-btn lf" @click="control()">我的控制台</div>
				<div class="quit rt">退出</div>
				<div class="top-user rt">您好，xx</div>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
	    data() {
            return {
            	
            }
        },
        methods: {
        	control(){
        		var self = this;
        		let access_token = JSON.parse(localStorage.getItem('access_token'));
        		var data = {
        			access_token:access_token
        		};
        		self.$http.post('/web/homepage',data).then(function(data){
    				if(data.data.status == 200){
    					if(data.data.type == 1){
    						self.$router.push('/principal');
    					}else{
    						self.$router.push('/teacher');
    					}
    				}else{
    					alert(data.data.msg);
    				}
    			});
        	}
        }
	}
</script>
<style scoped>
	.top{height:75px;line-height:75px;color:#fff;}
	.logo{width:178px;border-right:2px solid #333;height:75px;}
	.top-main{width:calc(100% - 240px);padding:0 20px}
	.top-user{padding-left:30px;background: url(../../../static/img/admin.png) no-repeat center left;background-size: 20px ;padding-right:20px;}
	.top-btn{height:40px;line-height:40px;width:105px;margin-left:20px;text-align: center;margin-top:17.5px;border-left:2px solid #333;cursor: pointer;}
	.quit{width:70px;text-align:center;cursor: pointer;border-left:2px solid #333;height:40px;line-height:40px;margin-top:17.5px;}
</style>
