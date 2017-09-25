<template>
	<div class="home-principal">
		<div class="home-msg zoom">
			<div class="home-msg-approval lf" style="margin-right:40px;">待我审批：<span>0</span></div>
			<div class="home-msg-inform lf">未读信息：<span>0</span></div>
		</div>
		<div style="color:#333" class="zoom">
			<div class="home-box lf">
				<div class="leave" v-show="no-leave">
					<div class="leave-img home-img"></div>
					<div class="leave-txt" style="color:#999;text-align: center;height:50px;line-height:50px;">今日无请假</div>
				</div>
				<div class="vacate">
					<div class="home-title">教师请假记录</div>
					<div class="home-btn">查看</div>
				</div>
			</div>
			<div class="home-box student lf">
				<div class="home-title">学生情况</div>
				<div class="home-btn">本学期新增学生</div>
			</div>
			<div class="home-box inform lf">
				<div class="inform-img home-img"></div>
				<div class="inform-txt home-txt">发送通知</div>
			</div>
		</div>
		<div style="padding-top:30px;" class="zoom">
			<div class="home-box vote lf">
				<div class="home-title">投票情况</div>
				<div class="home-btn">最新投票</div>
			</div>
			<div class="home-box statistics lf">
				<div class="home-title">班级课程管理</div>
				<div class="home-btn">查看课表</div>
				<div class="home-btn" style="margin-top:20px;position: relative;">课程动态<span class="hint">+11</span></div>
			</div>
			
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.home-principal{background: #ECEFF4;padding-bottom: 50px;}
	.home-msg{font-size: 16px;padding-left:40px;height:70px;line-height:70px;color:#333;}
	.home-box{width:calc((100% - 160px)/3);height:300px;background: #fff;margin-left:40px;border-radius: 10px;box-shadow:6px 6px 5px #d8d8d8;-moz-box-shadow:6px 6px 5px #d8d8d8;-webkit-box-shadow:6px 6px 5px #d8d8d8;}
	.leave,.inform{padding:100px 0;}
	.home-img{height:50px;}
	.leave-img{background: url(../../../../../static/img/home/leave.png) no-repeat center;}
	.home-txt{text-align: center;height:50px;line-height:50px;font-size: 14px;}
	.home-txt:hover{color:#3FCBFF;}
	.home-title{height:120px;line-height:120px;text-align: center;font-size: 18px;}
	.home-btn{height:50px;line-height:50px;border:1px solid #ECEFF4;border-radius: 4px;background: #f1f1f1;margin:0 20px;text-align: center;font-size:14px;}
	.home-btn:hover{border-color:#F7D359;background: #fff;}
	.inform-img{background: url(../../../../../static/img/home/inform.png) no-repeat center;}
	.hint{position:absolute;top:5px;right:88px;width:26px;height:26px;border-radius: 50%;background: #E5233F;text-align: center;line-height:26px;color:#fff;font-size:12px;}
</style>