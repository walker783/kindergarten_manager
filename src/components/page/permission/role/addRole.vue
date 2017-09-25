<template>
	<div class="addRole" style="padding-left:30px;padding-bottom: 50px;">
		<div class="tab-main">
			<div style="margin-top:30px;padding-bottom: 50px;">
				<div class="addsset-title">添加角色</div>
				<div class="addsset-items">
					<div class="addsset-item">
						<div class="search-item">
							<div class="mselect-label">角色名&nbsp;&nbsp;</div>
							<input type="text" class="input-large" />
						</div>
					</div>
					<div class="addsset-item">
						<div class="search-item">
							<div class="mselect-label">角色权限&nbsp;&nbsp;</div>
							<div class="mselect input-large"></div>
						</div>
					</div>
					<div style="margin-top:50px;padding-left:250px;">
						<button class="butn btn-main btn-normal">保存</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.addsset-title{border-bottom: 1px solid #ccc;text-align: center;font-size: 28px;padding: 15px 0;}
	.mselect-label{width: 120px;text-align: right;}
	.input-large{width: 400px;}
	.addsset-items{width: 600px;margin: 0 auto;}
	input{height:40px;}
	.butn{height:40px;line-height:40px;}
</style>