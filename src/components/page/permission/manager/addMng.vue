<template>
	<div class="addMng main">
		<div class="addMng-top main-top zoom">
			<div class="round lf"></div>
			<div class="addMng-title lf">权限管理/<span class="zClr-666">管理员列表/</span><span class="zClr-666">添加管理员</span></div>
		</div>
		<div class="tab-main">
			<div style="margin-top:30px;padding-bottom: 50px;">
				<div class="addsset-title">新增管理员</div>
				<div class="addsset-main">
					<el-form ref="addMsg" :model="addMsg" :rules="rules" label-width="100px" style="padding-right:100px;">
						<el-form-item label="姓名：" prop="name">
							<el-input v-model="addMsg.name" size="nomal" placeholder="请输入姓名"></el-input>
						</el-form-item>
						<el-form-item label="手机号：">
							<el-input v-model="addMsg.phone" size="nomal" placeholder="请输入手机号"></el-input>
						</el-form-item>
						<el-form-item label="角色：">
							<el-select v-model="addMsg.role" placeholder="请选择职位">
								<el-option v-for="item in optiond" :label="item" :value="item"></el-option>
							</el-select>
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
				addMsg: {
					name:''
				},
				rules: {
					name: []
				}
			}
		}
	}
</script>

<style scoped>
	.addsset-title{border-bottom: 1px solid #ccc;text-align: center;font-size: 28px;padding: 15px 0;}
	.addsset-main{width:600px;margin:0 auto;padding-top:30px;}
	.button{display: block;margin-right:100px;margin-top:10px;}
</style>