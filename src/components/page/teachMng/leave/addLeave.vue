<template>
	<div class="addleave main">
		<div class="addleave-top main-top zoom">
			<div class="round lf"></div>
			<div class="addleave-title lf">教学管理/<span class="zClr-666">在线申请请假</span></div>
		</div>
		<div class="addleave-main" style="padding-bottom: 50px;">
			<el-form :inline="true" :model="leave" :rules="rules">
				<el-form-item label="姓名：" prop="name" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.multi_name" size="nomal" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="职位：" class="search-item" style="margin-right:30px;">
					<el-select v-model="leave.multi_type" placeholder="请选择职位">
						<el-option v-for="item in multi_type" :label="item.departmentname" :value="item.departmentname"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="开始时间：" class="search-item" style="margin-right:30px;">
					<el-date-picker type="date" placeholder="选择日期" v-model="leave.sta_time" @change="starttime"></el-date-picker>
				</el-form-item>
				<el-form-item label="结束时间：" class="search-item" style="margin-right:30px;">
					<el-date-picker type="date" placeholder="选择日期" v-model="leave.end_time" @change="endtime"></el-date-picker>
				</el-form-item>
				<el-form-item label="请假天数：" class="search-item" style="margin-right:30px;">
					<el-input v-model="leave.days" size="nomal" placeholder="输入请假天数" ></el-input>
				</el-form-item>
				<el-form-item label="请假类别：" class="search-item" style="margin-right:30px;">
					<el-select v-model="leave.leave_type" placeholder="请选择请假类别">
						<el-option v-for="item in leave_type" :label="item.txt" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="备注" class="search-item">
			    	<el-input type="textarea" v-model="leave.name" style="width:600px;min-height:40px;"></el-input>
			  	</el-form-item>
				<div class="search-item">
					<el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
						<el-button size="small" type="primary">上传附件</el-button>
					</el-upload>
				</div>
			</el-form>
			<div class="addStaff-btn" style="margin-top:50px;">
				<el-button class="button btn-main" type="success"  @click="submitForm('leave')">提交</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
            return {
            	leave:{
            		multi_name:'',
            		multi_type:'',
            		sta_time:'',
            		end_time:'',
            		days:'',
            		imginput:'',
            		leave_type:''
            	},
            	rules: {
				multi_name: [{
					required: true,
					message: '请输入用户名',
					trigger: 'blur'
				}],
				multi_type: [{
					required: true,
					message: '请选择职位',
					trigger: 'blur'
				}],
				sta_time: [{
					required: true,
					message: '请填写开始时间',
					trigger: 'blur'
				}],
				end_time: [{
					required: true,
					message: '请填写结束时间',
					trigger: 'blur'
				}],
				leave_type: [{
					required: true,
					message: '请选择请假类型',
					trigger: 'blur'
				}]
			},
			fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
			multi_type:[],
			leave_type:[],
			imginput:[],
			sta_time:'',
			end_time:'',
            }
       },
       methods:{
	       starttime(sta_time){
	       		let self = this;
	       		let str = sta_time.replace(/-/g,'/');
	       		let start_time = new Date(str);
	       		let starttime = start_time.getTime();
	       		self.sta_time = starttime;
	       },
	       endtime(end_time){
	       		let self = this;
	       		let strr = end_time.replace(/-/g,'/');
	       		let over_time = new Date(strr);
	       		let endtime = over_time.getTime();
	       		self.end_time = endtime;
	       		//let days = endtime - starttime;
	       		//let daystime = 
	       		self.leave.days = (self.end_time - self.sta_time)/86400000;
	       },
		      handleRemove(file, fileList) {
		        		console.log(file, fileList);
		      },
		      handlePreview(file) {
		        		console.log(file);
		      },
	       submitForm(leave){
        			let self = this;
        			self.$refs.upload.submit();
        			let access_token = JSON.parse(localStorage.getItem('access_token'));
        			let data={
        				access_token:access_token,
        				//multi_name : self.leave.multi_name,
        				//multi_type : self.leave.multi_type,
        				sta_time : self.leave.sta_time,
        				end_time : self.leave.end_time,
        				days : self.leave.days,
        				imginput : self.leave.imginput,
        				leave_type : self.leave.leave_type
        			};
	        		self.$http.post('/web/applicationLeave',data).then(function(data){
	        			console.log(data);
	        		})
        		},
       },
       
       created:function () {
        		let self = this;
        		let type = self.$route.query.type,
        		    access_token = JSON.parse(localStorage.getItem('access_token'));
    		    if(type == 'teacher'){
				//self.leave_type = ["事假","病假","年假","调休","婚假","产假","陪产假","其他"];
				self.leave_type = [{txt:"事假",value:0},{txt:"病假",value:1},{txt:"年假",value:2},{txt:"调休",value:3},{txt:"婚假",value:4},{txt:"产假",value:5},{txt:"陪产假",value:6},{txt:"其他",value:7}];
				
			}else{
				self.leave_type = [{txt:"事假",value:0},{txt:"病假",value:1},{txt:"其他",value:7}];
			}
		},
	}
</script>

<style scoped>
	.addleave-main{padding-left:30px;}
	.search-item{padding-top:30px;}
	.input-normal{width:200px;}
	.appr-note{width:400px;min-height:150px;border:1px solid #ccc;border-radius: 4px;padding:10px 20px;}
	.el-form-item{margin-bottom: 0;}
	.button{display: block;margin:0 auto;}
</style>