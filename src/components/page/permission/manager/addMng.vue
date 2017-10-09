<template>
	<div class="addMng main" style="padding-left:30px;">
		<div class="addMng-top main-top zoom">
			<div class="round lf"></div>
			<div class="addMng-title lf">权限管理/<span class="zClr-666">管理员列表/</span><span class="zClr-666">添加管理员</span></div>
		</div>
		<div class="tab-main">
			<div style="margin-top:30px;padding-bottom: 50px;">
				<div class="addsset-title">新增管理员</div>
				<div class="addsset-items">
					<div class="addsset-item">
						<div class="search-item">
							<div class="mselect-label">姓名&nbsp;&nbsp;</div>
							<input type="text" class="input-large"  />
						</div>
					</div>
					<div class="addsset-item">
						<div class="search-item">
							<div class="mselect-label">手机号&nbsp;&nbsp;</div>
							<input type="text" class="input-large"  />
						</div>
					</div>
					<div class="addsset-item">
						<div class="search-item">
							<div class="mselect-label">角色&nbsp;&nbsp;</div>
							<input type="text" class="input-large"  />
						</div>
					</div>
					<div style="margin-top:50px;padding-left:250px;">
						<button class="butn btn-main btn-normal">确定</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.addsset-title{text-align: center;font-size: 28px;padding: 15px 0;}
	.mselect-label{width: 120px;text-align: right;}
	.input-large{width: 400px;border:1px solid #333}
	.addsset-items{width: 600px;margin: 0 auto;}
	input{height:40px;}
	.butn{height:40px;line-height:40px;}
</style>