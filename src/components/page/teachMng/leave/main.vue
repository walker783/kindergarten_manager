<template>
	<div class="leave main">
		<div class="leave-top main-top zoom">
			<div class="round lf"></div>
			<div class="leave-title lf">教学管理/<span class="zClr-666">员工请假记录</span></div>
		</div>
		<div class="search-btn" style="margin-top:20px;">
			<div class="butn btn-sec input-small" style='margin-top:5px;'>导出</div>
		</div>
		<div class="page" style="padding-top:20px;padding-bottom: 20px;">
			<div class="page-info">
				<el-table ref="singleTable" :data="tableData" fit border style="width: 100%;" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column prop="name" label="姓名" header-align="center"></el-table-column>
					<el-table-column prop="position" label="职位" header-align="center"></el-table-column>
					<el-table-column prop="job_number" label="工号" header-align="center"></el-table-column>
					<el-table-column prop="phone" label="手机号" header-align="center"></el-table-column>
					<el-table-column prop="email" label="邮箱" header-align="center"></el-table-column>
					<el-table-column prop="clbum" label="所带班级" header-align="center"></el-table-column>
				</el-table>
				<div class="pagination zoom">
					<el-pagination @current-change="handleCurrentChange" :current-page="cur_page" layout="prev, pager, next" :total="totalpages" class="rt">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>