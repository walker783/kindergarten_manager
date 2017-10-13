<template>
	<div class="approval main">
		<div class="aaproval-left">
			<div class="approval-top main-top zoom">
				<div class="round lf"></div>
				<div class="approval-title lf">教学管理/<span class="zClr-666">审批</span></div>
			</div>
			<div class="search-btn" style="margin-top:20px;">
				<div class="butn btn-main btn-normal" style="margin-top:5px;">我的审批</div>
			</div>
			<div class="approval-install">
				<div class="appr-set">
					<div class="appr-set-title">
						<span class="zClr-333">审批设置</span>
						<span class="zClr-999" style="margin-left:15px;">（幼儿请假）</span>
					</div>
					<div class="zClr-999 appr-set-count">
						<span>设置审批人</span>
						<span class="appr-set-sign" @click="addapprove">+</span>
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
						<span class="appr-set-sign" @click="addapprove">+</span>
					</div>
				</div>
			</div>
		</div>
		<div class="approval-right" v-show="approveset">
			<div class="appr-bg"></div>
			<div class="appr-main">
				<div class="appr-right-title main-top" style="padding-left:30px;font-size: 20px;border:0;position: relative;">
					审批人设置
					<div class="appr-del" @click="closeapprove"></div>
				</div>
				<div class="setAppr">
					<div class="setAppr-title">
						<span class="setAppr-genre">幼儿请假</span>
						<span class="setAppr-txt">以班级为单位设置</span>
					</div>
					<div class="setAppr-main zoom">
						<div class="setAppr-sel lf">
							<el-select v-model="classes" placeholder="请选择班级" style="width:150px;">
								<el-option v-for="item in classInfo" :label="item.name" :value="item.id"></el-option>
							</el-select>
						</div>
						<div class="setAppr-sel lf setAppr-arrow">
							<div class="setAppr-state">选择审批人</div>
							<img src="../../../../../static/img/icon/arrow.png"/>
						</div>
						<div class="setAppr-sel lf">
							<el-select v-model="approve_name" placeholder="请选择审批人" style="width:150px;">
								<el-option v-for="item in employeeInfo" :label="item.name" :value="item.id"></el-option>
							</el-select>
						</div>
						<div class="lf" style="margin-left:40px;">
							<el-button type="primary" class="btn-main" @click="sturender()">确定</el-button>
						</div>
					</div>
				</div>
				<div class="setAppr">
					<div class="setAppr-title">
						<span class="setAppr-genre">员工请假</span>
						<span class="setAppr-txt">以角色为单位设置</span>
					</div>
					<div class="setAppr-main zoom">
						<div class="setAppr-sel lf">
							<el-select v-model="person" placeholder="员工类别" style="width:150px;">
								<el-option v-for="item in personInfo" :label="item.tex" :value="item.tex"></el-option>
							</el-select>
						</div>
						<div class="setAppr-sel lf setAppr-arrow">
							<div class="setAppr-state">选择审批人</div>
							<img src="../../../../../static/img/icon/arrow.png"/>
						</div>
						<div class="setAppr-sel lf">
							<el-select v-model="kapprove" placeholder="请选择审批人" style="width:150px;">
								<el-option v-for="item in kinderInfo" :label="item.approve_name" :value="item.approve_id"></el-option>
							</el-select>
						</div>
						<div class="lf" style="margin-left:40px;">
							<el-button type="primary" class="btn-main" @click="kindrender()">确定</el-button>
						</div>
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
				classInfo:[],
				kinderInfo:[],
				employeeInfo:[],
				personInfo:[{tex:"全体员工"}],
				approveset:false,
				classes:'',
				person:'',
				kapprove:'',
				approve_name:'',
				approve_id:'',
				kapprove_name:'',
				kapprove_id :''
            }
       },
       created:function () {
        		let self = this;
        		let access_token = JSON.parse(localStorage.getItem('access_token'));
        		let data = {
				access_token:access_token
			};
			self.$http.post('/web/setApproverInit',data).then(function(data){
					self.classInfo = data.body.classInfo;
					self.kinderInfo = data.body.kinderInfo;
					console.log(data.body.kinderInfo);
				})
		},
	   watch:{
		   classes: function (val) {
		   	  let self = this;
		      this.classInfo.forEach(function(item){
		      	if (item.id === val) {
		      		self.employeeInfo = item.approve
		      	}
		      })
		      this.approve_name = this.employeeInfo[0].name;
		      this.approve_id = this.employeeInfo[0].id;
		   },
		   kapprove:function(val){
				let self = this;
				self.kapprove_id = val;
				self.kapprove_name =  this.kinderInfo[0].approve_name;
		   },
	   },
       methods:{      	
	       	addapprove(){
	       		let self = this;
	       		self.approveset = true;	
	       	},
	       	closeapprove(){
	       		let self = this;
	       		self.approveset = false;
	       	},
	       	sturender(){
	       		let self = this;
	     		let data={
	      				class_id : self.classes,
	      				approve_id:self.approve_id,
	      				approve_name : self.approve_name
	      			};
		        		self.$http.post('/web/setClassApprover',data).then(function(data){
		        			console.log(data);
		        		})
	       	},
	       	kindrender(){
	       		let self = this;
	     		let data={
	      				kapprove_id :self.kapprove_id ,
	      				kapprove_name : self.kapprove_name
	      			};
		        		self.$http.post('/web/setKddApprover',data).then(function(data){
		        			console.log(data);
		        		})
	       	},
       }
	}
</script>

<style scoped>
	.approval{position: relative;height:100%;}
	.appr-set{padding-top:10px;padding-left:30px;font-size: 18px;}
	.appr-set-title{height:56px;line-height:56px;}
	.appr-set span{display: inline-block;}
	.appr-set-count{padding-left:50px;}
	.appr-set-sign{width:20px;height:20px;border:1px solid #999;border-radius: 50%;text-align: center;line-height:20px;}
	.approval-right{position: absolute;top:0;left:0;z-index: 9;width:100%;height:100%;}
	.appr-bg{position: absolute;top:0;left:0;width:400px;height:100%;background: #fff;opacity: 0.3;}
	.appr-main{position: absolute;top:0;left:400px;background: #fff;width:calc(100% - 400px);height:100%;box-shadow:-2px 0px 2px #f2f2f2;-moz-box-shadow:-2px 0px 2px #f2f2f2;-webkit-box-shadow:-2px 0px 2px #f2f2f2}
	.setAppr{padding:30px;border-top:1px solid #f2f2f2;}
	.setAppr-title span{display: inline-block;}
	.setAppr-txt{margin-left:30px;color: #999;}
	.setAppr-main{margin-top:20px;}
	.setAppr-arrow{width:96px;height:15px;margin:0 20px;position: relative;margin-top:11px;}
	.setAppr-state{position:absolute;top:-20px;left:0;width:100%;font-size:14px;text-align: center;}
	.appr-del{position: absolute;top:10px;right:20px;width:20px;height:20px;border-radius: 50%;background: url(../../../../../static/img/icon/del-hui.png) no-repeat;background-size: 20px;cursor: pointer;}
</style>