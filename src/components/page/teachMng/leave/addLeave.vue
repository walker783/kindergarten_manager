<template>
	<div class="addleave" style="padding-left:30px;padding-bottom: 50px;">
		<div class="addleave-top main-top zoom">
			<div class="round lf"></div>
			<div class="addleave-title lf">教学管理/<span class="zClr-666">在线申请请假</span></div>
		</div>
		<div class="addleave-main">
			<div class="search-item" style="margin-right:40px;">
				<div class="mselect-label">姓名&nbsp;</div>
				<input type="text" class="input-normal" />
			</div>
			<div class="search-item" style="margin-right:40px;">
				<div class="mselect-label">职位&nbsp;</div>
				<input type="text" class="input-normal" />
			</div>
			<div class="search-item" style="margin-right:40px;">
				<div class="mselect-label">开始时间&nbsp;</div>
				<input type="text" class="input-normal" />
			</div>
			<div class="search-item" style="margin-right:40px;">
				<div class="mselect-label">结束时间&nbsp;</div>
				<input type="text" class="input-normal" />
			</div>
			<div class="search-item" style="margin-right:40px;">
				<div class="mselect-label">请假天数&nbsp;</div>
				<input type="text" class="input-normal" />
			</div>
			<div class="search-item" style="margin-right:40px;">
				<div class="mselect-label">请假类别&nbsp;</div>
				<input type="text" class="input-normal" />
			</div>
			<div class="search-item zoom" style="display: block;">
				<textarea name="note" rows="" cols="" class="appr-note"></textarea>
			</div>
			<div class="search-item">
				<button class="butn btn-main btn-normal">上传附件</button>
			</div>
			<div style="margin-top:50px;">
				<button class="butn btn-normal" style="display: block;margin: 0 auto;" disabled="true">提交</button>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.addleave-main{padding-left:30px;}
	.search-item{padding-top:30px;}
	.input-normal{width:200px;}
	.appr-note{width:400px;min-height:150px;border:1px solid #ccc;border-radius: 4px;padding:10px 20px;}
</style>