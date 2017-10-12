<template>
	<div class="sidebar_box">
		<div class="sidebar" id="sidebar">
			<ul class="menuStyle">
				<li style="background: #555c72;">
					<div class="menuStyle-top"></i></div>
				</li>
				<li v-for="(item,index) in oneLevel">
					<div class="oneLi" @click="show($event)"><i class="el-icon-caret-right el-submenu__icon-arrow"></i><div style="padding-left:20px;">{{item.name}}</div></div>
					<ul class="menuStyleOne" style="display:none">
						<li v-for="itemSub in towLevel[index]"><div @click="skip(itemSub.code)" class="towLi" v-bind:class="itemSub.code">{{itemSub.name}}</div></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	$('.menuStyleOne').on('click','li',function(){
		console.log(11);
		console.log($(this));
		$(this).addClass('active');
	});
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
				console.log(self.siderBar);
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
			},
			show($event){
				let self = this;
				if($($($event.path)[1]).siblings('ul[class=menuStyleOne]').is(':hidden')){
				console.log(11);
					$($($event.path)[1]).siblings('ul[class=menuStyleOne]').show();
					$($($event.path)[1]).parent('li').siblings('li').children('ul[class=menuStyleOne]').hide();
					$($($event.path)[1]).parent('li').siblings('li').children('div').children('i').removeClass('el-icon-caret-bottom').addClass('el-icon-caret-right');
					$($($event.path)[1]).children('i').removeClass('el-icon-caret-right').addClass('el-icon-caret-bottom');
				}else{
					$($($event.path)[1]).siblings('ul[class=menuStyleOne]').hide();
					$($($event.path)[1]).children('i').removeClass('el-icon-caret-bottom').addClass('el-icon-caret-right');
				}
			},
			skip(code){
				let self = this;
				switch (code){
					//教学管理
					case 'YGGL':self.$router.push('/staffMng');break;//员工管理
					case 'JSQJJL':self.$router.push('/leave');break;//教师请假记录
					case 'ZXSQQJ':self.$router.push('/addLeave');break;//在线申请请假
					case 'SP':self.$router.push('/approval');break;//审批
					//权限管理
					case 'GLYLB':self.$router.push('/manager');break;//管理员列表
					case 'JSLB':self.$router.push('/role');break;//角色列表
				}
			}
		}
	}
</script>

<style scoped>
/*菜单样式*/
.sidebar {display: block;position: absolute;width: 240px;left: 0;top: 0px;background: #4A5065;}
#sidebar .menuStyle>li>div {width: 100%;padding: 6px 0;padding-left: 50px;height:44px;line-height:34px;}
#sidebar .menuStyle .el-submenu__icon-arrow {top: 24px;left:50px;}
.sidebar_box {display: block;position: absolute;width: 240px;left: 0;top: 75px;bottom: 0;background: #4A5065;}
#sidebar div,#sidebar ul,#sidebar li {box-sizing: border-box;list-style: none;padding: 0;margin: 0;font-size: 16px;}
#sidebar .menuStyle-top{background: url(../../../static/img/merge.png) no-repeat center;}
#sidebar .menuStyle {color: #fff;}
#sidebar .menuStyle>li>div.oneLi:hover {background: #f7d359;}
#sidebar .menuStyle>li {position: relative;cursor: pointer;}
#sidebar .menuStyleOne {background: #333745;}
#sidebar .menuStyleOne li:hover{background: #f7d359;}
#sidebar .menuStyleOne>li>div {width: calc(100% - 50px);padding: 6px 0;margin-left: 50px;height:44px;line-height:34px;padding-left:30px;background-size: 20px;}
.active{background: #f7d359;}
/*icon*/
.BJHT{background: url(../../../static/img/icon/BJHT.png) no-repeat center left;}
.BJXC{background: url(../../../static/img/icon/BJXC.png) no-repeat center left;}
.BJXX{background: url(../../../static/img/icon/BJXX.png) no-repeat center left;}
.FQTP{background: url(../../../static/img/icon/FQTP.png) no-repeat center left;}
.GLYLB{background: url(../../../static/img/icon/GLYLB.png) no-repeat center left;}
.JSKCTJ{background: url(../../../static/img/icon/JSKCTJ.png) no-repeat center left;}
.JSQJJL{background: url(../../../static/img/icon/JSQJJL.png) no-repeat center left;}
.KCMCSZ{background: url(../../../static/img/icon/KCMCSZ.png) no-repeat center left;}
.PKGL{background: url(../../../static/img/icon/PKGL.png) no-repeat center left;}
.QBXSXX{background: url(../../../static/img/icon/QBXSXX.png) no-repeat center left;}
.RYZS{background: url(../../../static/img/icon/RYZS.png) no-repeat center left;}
.SKDDSZ{background: url(../../../static/img/icon/SKDDSZ.png) no-repeat center left;}
.SKSJSZ{background: url(../../../static/img/icon/SKSJSZ.png) no-repeat center left;}
.SP{background: url(../../../static/img/icon/SP.png) no-repeat center left;}
.SZTD{background: url(../../../static/img/icon/SZTD.png) no-repeat center left;}
.TPTJ{background: url(../../../static/img/icon/TPTJ.png) no-repeat center left;}
.TZ{background: url(../../../static/img/icon/TZ.png) no-repeat center left;}
.XSFBGL{background: url(../../../static/img/icon/XSFBGL.png) no-repeat center left;}
.XSXX{background: url(../../../static/img/icon/XSXX.png) no-repeat center left;}
.YGGL{background: url(../../../static/img/icon/YGGL.png) no-repeat center left;}
.YSJJ{background: url(../../../static/img/icon/YSJJ.png) no-repeat center left;}
.ZXSQQJ{background: url(../../../static/img/icon/ZXSQQJ.png) no-repeat center left;}
.JSLB{background: url(../../../static/img/icon/JSLB.png) no-repeat center left;}







#sidebar .menuStyle .marginRight {margin-right: 12px;}


#sidebar .menuStyle .el-submenu__icon-arrow.open-hover {transform: rotateZ(180deg);}



.sidebar>ul {width: 100%;height: 100%;}

.el-menu {background: #34495E;}

.menu-list,.menu-list>li {list-style: none;float: left;}

.showMenu {padding: 0 28px;display: block;position: absolute;height: 30px;padding-top: 4px;left: 253px;top: 1px;right: 15px;bottom: 0;background: #fff;font-size: 18px;overflow: hidden;}

.menu-list {position: absolute;width: 3000px;height: 34px;}

.menu-box {position: absolute;top: 0px;bottom: 0px;left: 28px;right: 28px;z-index: 8;background: #2D3F51;border-right: 1px solid #e8e7e7;border-left: 1px solid #e8e7e7;height: 34px;overflow: hidden;}

.menu-list>li {padding: 0px 26px 0pc 20px;height: 34px;line-height: 34px;cursor: pointer;color: #ddd;border-right: none;position: relative;font-size: 14px;}

.menu-list>li:hover {background: #666;margin-left: -1px;padding-right: 27px;color: #fff;}

.menu-list>li:hover #rightLine {display: none;}

.menu-list>li:hover #closeIcon {display: block;}

.menu-list>li:last-child {/*border: 1px solid #ddd;*/}

.menu-list>li.active {background: #fff;color: #30A0EA;margin-left: -1px;border-bottom-color: #fff;}

.close-show {display: none;position: absolute;width: 16px;height: 16px;line-height: 16px;text-align: center;right: 6px;top: 0px;font-size: 16px;border-radius: 50%;background: rgba(255, 255, 255, 0);}

.border_right {position: absolute;right: 0;height: 20px;border-right: 1px solid #bbb;top: 7px;}

.border_right.active {display: none;}

.close-show:hover {background: #fb7f84;color: #fff;}

.el-menu--collapse>.el-menu-item [class^=el-icon-],.el-menu--collapse>.el-submenu>.el-submenu__title [class^=el-icon-] {margin-right: 10px;}

.prev-icon {position: absolute;top: 0;left: 0;height: 34px;line-height: 34px;cursor: pointer;color: #fff;width: 25px;text-align: left;z-index: 10;background: #284D70;border-radius: 4px;}

.secondeMenu>.thirdMenu>li {background: #191C21;}

.secondeMenu>.thirdMenu>li:hover {background: #D3D4D6;opacity: 0.95;color: #20a0ff;}

.next-icon {position: absolute;right: 0;top: 0;height: 34px;line-height: 34px;cursor: pointer;color: #FFF;width: 25px;text-align: right;z-index: 10;background: #284D70;border-radius: 4px;}

.erjiMenu {width: 100%;}

.erjiMenu>.el-submenu>.el-submenu__title {padding-left: 40px;}
</style>