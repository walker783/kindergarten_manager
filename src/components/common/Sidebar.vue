<template>
	<div class="sidebar_box">
		<div class="sidebar" id="sidebar">
			<ul class="menuStyle">
				<li v-for="(item,index) in oneLevel">
					<div class=""><i class="el-icon-caret-right el-submenu__icon-arrow"></i><div style="padding-left:20px;">{{item.name}}</div></div>
					<ul class="submenu">
						<li v-for="itemSub in towLevel[index]"></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	document.addEventListener('click', (e) => {
		$('.thirdMenu').css('height', '0px').hide();
	})
	export default {
		data() {
			return {
				siderBar:[],
				oneLevel:[],
				towLevel:[],
				j:[]
			}
		},
		created() {
			this.render();
		},
		methods: {
			render(){
				var self = this;
				var subset1 = [];
				var subset2 = [];
				var subset3 = [];
				var subset4 = [];
				var subset5 = [];
				var subset6 = [];
				self.siderBar = JSON.parse(localStorage.getItem('siderBar'));
				for(var i =0;i<self.siderBar.length;i++){
					if(self.siderBar[i].level == 0){
						self.j.push(i);
					}
				}
				for(var i = 0;i<self.j.length;i++){
					self.oneLevel.push(self.siderBar[self.j[i]]);
				}
				for(var i = self.j[0]+1;i<self.j[1];i++){
					subset1.push(self.siderBar[i]);
				}
				for(var i = self.j[1]+1;i<self.j[2];i++){
					subset2.push(self.siderBar[i]);
				}
				for(var i = self.j[2]+1;i<self.j[3];i++){
					subset3.push(self.siderBar[i]);
				}
				for(var i = self.j[3]+1;i<self.j[4];i++){
					subset4.push(self.siderBar[i]);
				}
				for(var i = self.j[4]+1;i<self.j[5];i++){
					subset5.push(self.siderBar[i]);
				}
				for(var i = self.j[5]+1;i<self.j[6];i++){
					subset6.push(self.siderBar[i]);
				}
				self.towLevel = [subset1,subset2,subset3,subset4,subset5,subset6];
//				self.siderBar.forEach(function(elem,index){
//					if(elem.level == 0){
//						self.oneLevel.push(elem);
//					}else{
//						self.towLevel.push(elem);
//					}
//				})
				console.log(self.oneLevel);
				console.log(self.towLevel);
			}
		}
	}
</script>

<style scoped>
	/*菜单样式*/
	
	#sidebar a {
		display: inline-block;
		width: 172px;
		height: 20px;
		color: #fff;
	}
	
	#sidebar a:hover {
		color: #986;
	}
	
	#sidebar div,
	#sidebar ul,
	#sidebar li {
		box-sizing: border-box;
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 14px;
	}
	
	#sidebar .menuStyle {
		color: #fff;
	}
	
	#sidebar .menuStyle>li {
		position: relative;
		cursor: pointer;
	}
	
	#sidebar .menuStyle>li>div {
		width: 100%;
		padding: 6px 0;
		padding-left: 35px;
		height:40px;line-height:40px;
	}
	
	#sidebar .menuStyleOne {
		display: none;
		background: #2D3F51;
	}
	
	#sidebar .menuStyleOne>li {
		position: relative;
	}
	
	#sidebar .menuStyleOne>li>div {
		width: 100%;
		padding: 6px 0;
		padding-left: 50px;
	}
	
	#sidebar .menuStyleOne>li>div:hover {
		background: #d1dbe5;
		color: #986;
	}
	
	#sidebar .menuStyle>li>div:hover {
		background: #d1dbe5;
		color: #986;
	}
	
	#sidebar .menuStyleTwo {
		display: none;
		background: #232f3c;
	}
	
	#sidebar .menuStyleTwo>li>div {
		width: 100%;
		padding: 6px 0;
		padding-left: 70px;
	}
	
	#sidebar .menuStyleTwo>li>div:hover {
		background: #d1dbe5;
		color: #986;
	}
	
	#sidebar .menuStyle .marginRight {
		margin-right: 12px;
	}
	
	#sidebar .menuStyle .el-submenu__icon-arrow {
		top: 35px;left:0;
	}
	
	#sidebar .menuStyle .el-submenu__icon-arrow.open-hover {
		transform: rotateZ(180deg);
	}
	
	.sidebar_box {
		display: block;
		position: absolute;
		width: 100%;
		left: 0;
		top: 70px;
		bottom: 0;
		background: #fff;
		font-size: 12px !important;
	}
	
	.sidebar {
		display: block;
		position: absolute;
		width: 240px;
		left: 0;
		top: 0px;
		bottom: 0;
		background: #4A5065;
	}
	
	.sidebar>ul {
		width: 100%;
		height: 100%;
	}
	
	.el-menu {
		background: #34495E;
	}
	
	.menu-list,
	.menu-list>li {
		list-style: none;
		float: left;
	}
	
	.showMenu {
		padding: 0 28px;
		display: block;
		position: absolute;
		height: 30px;
		padding-top: 4px;
		left: 253px;
		top: 1px;
		right: 15px;
		bottom: 0;
		background: #fff;
		font-size: 18px;
		overflow: hidden;
	}
	
	.menu-list {
		position: absolute;
		width: 3000px;
		height: 34px;
	}
	
	.menu-box {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 28px;
		right: 28px;
		z-index: 8;
		background: #2D3F51;
		border-right: 1px solid #e8e7e7;
		border-left: 1px solid #e8e7e7;
		height: 34px;
		overflow: hidden;
	}
	
	.menu-list>li {
		padding: 0px 26px 0pc 20px;
		height: 34px;
		line-height: 34px;
		cursor: pointer;
		color: #ddd;
		border-right: none;
		position: relative;
		font-size: 14px;
	}
	
	.menu-list>li:hover {
		background: #666;
		margin-left: -1px;
		padding-right: 27px;
		color: #fff;
	}
	
	.menu-list>li:hover #rightLine {
		display: none;
	}
	
	.menu-list>li:hover #closeIcon {
		display: block;
	}
	
	.menu-list>li:last-child {
		/*border: 1px solid #ddd;*/
	}
	
	.menu-list>li.active {
		background: #fff;
		color: #30A0EA;
		margin-left: -1px;
		border-bottom-color: #fff;
	}
	
	.close-show {
		display: none;
		position: absolute;
		width: 16px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		right: 6px;
		top: 0px;
		font-size: 16px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0);
	}
	
	.border_right {
		position: absolute;
		right: 0;
		height: 20px;
		border-right: 1px solid #bbb;
		top: 7px;
	}
	
	.border_right.active {
		display: none;
	}
	
	.close-show:hover {
		background: #fb7f84;
		color: #fff;
	}
	
	.el-menu--collapse>.el-menu-item [class^=el-icon-],
	.el-menu--collapse>.el-submenu>.el-submenu__title [class^=el-icon-] {
		margin-right: 10px;
	}
	
	.prev-icon {
		position: absolute;
		top: 0;
		left: 0;
		height: 34px;
		line-height: 34px;
		cursor: pointer;
		color: #fff;
		width: 25px;
		text-align: left;
		z-index: 10;
		background: #284D70;
		border-radius: 4px;
	}
	
	.secondeMenu>.thirdMenu>li {
		background: #191C21;
	}
	
	.secondeMenu>.thirdMenu>li:hover {
		background: #D3D4D6;
		opacity: 0.95;
		color: #20a0ff;
	}
	
	.next-icon {
		position: absolute;
		right: 0;
		top: 0;
		height: 34px;
		line-height: 34px;
		cursor: pointer;
		color: #FFF;
		width: 25px;
		text-align: right;
		z-index: 10;
		background: #284D70;
		border-radius: 4px;
	}
	
	.erjiMenu {
		width: 100%;
	}
	
	.erjiMenu>.el-submenu>.el-submenu__title {
		padding-left: 40px;
	}
</style>