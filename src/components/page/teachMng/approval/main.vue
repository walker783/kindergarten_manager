<template>
	<div class="approval" style="padding-left:30px;position: relative;">
		<div class="approval-top main-top zoom">
			<div class="round lf"></div>
			<div class="approval-title lf">教学管理/<span class="zClr-666">审批</span></div>
		</div>
		<div class="search-btn" style="margin-top:20px;">
			<div class="butn btn-main btn-normal">我的审批</div>
		</div>
		<div class="approval-install">
			<div class="appr-set">
				<div class="appr-set-title">
					<span class="zClr-333">审批设置</span>
					<span class="zClr-999" style="margin-left:15px;">（幼儿请假）</span>
				</div>
				<div class="zClr-999 appr-set-count">
					<span>设置审批人</span>
					<span class="appr-set-sign">+</span>
				</div>
			</div>
		</div>
		<div class="approval-install">
			<div class="appr-set">
				<div class="appr-set-title">
					<span class="zClr-333">审批设置</span>
					<span class="zClr-999" style="margin-left:15px;">（教师请假）</span>
				</div>
				<div class="zClr-999 appr-set-count">
					<span>设置审批人</span>
					<span class="appr-set-sign">+</span>
				</div>
			</div>
		</div>
		<div class="appr-main">
			<div class="appr-title">设置审批人</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.appr-set{padding-top:10px;padding-left:30px;font-size: 18px;}
	.appr-set-title{height:56px;line-height:56px;}
	.appr-set span{display: inline-block;}
	.appr-set-count{padding-left:50px;}
	.appr-set-sign{width:20px;height:20px;border:1px solid #999;border-radius: 50%;text-align: center;line-height:17px;}
	.appr-main{position: absolute;top:0;left:300px;height:100%;}
</style>