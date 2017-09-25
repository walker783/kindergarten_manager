<template>
	<div class="sidebar_box">
		<div class="sidebar" id="sidebar">
			<ul class="menuStyle">
				<li v-for="(item,index) in classA">
					<div @click="oneLevel($event)"><i :class="index == 0 ? 'el-icon-date' : index == 1 ? 'el-icon-time' : index == 2 ? 'el-icon-star-off' : index == 3 ? 'el-icon-date' : 'el-icon-star-on'" class="marginRight"></i>{{item.name}}<b class="el-submenu__icon-arrow el-icon-arrow-down"></b></div>
					<ul class="menuStyleOne">
						<li v-for="itemb in classB" v-show="itemb.parentid == item.menuid && itemb.formname !=''">
							<div @click="show(itemb.formname.substr(itemb.formname.lastIndexOf('.')+1), itemb.name)">{{itemb.name}}</div>
						</li>
						<li v-for="itemb in classB" v-show="itemb.parentid == item.menuid && itemb.formname ==''">
							<div @click="twoLevel($event)">{{itemb.name}}<i class="el-submenu__icon-arrow el-icon-arrow-down"></i></div>
							<ul class="menuStyleTwo">
								<li v-for="itemc in classC" v-show="itemc.parentid == itemb.menuid">
									<div @click="show(itemc.formname.substr(itemc.formname.lastIndexOf('.')+1), itemc.name)">{{itemc.name}}</div>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="showMenu">
			<div class="prev-icon" @click="prev_icon">《</div>
			<div class="next-icon" @click="next_icon">》</div>
			<div class="menu-box">
				<ul class="menu-list">
					<li class="yint" v-for="(list,index) in menuList" :class="list == targetWord ? 'active':''" @click="showMenu(list,$event)"><span @click="deleteMenu(list,$event)" class="close-show" id="closeIcon">&times;</span>{{list.slice(list.indexOf('&')+1)}}<i :class="list == targetWord ? 'active':''" class="border_right" id="rightLine"></i></li>
				</ul>
			</div>
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
				sureAdmin: false,
				currentName: '',
				menuList: [],
				isCollapse: true,
				openFlag1: false,
				openFlag2: false,
				openFlag11: true,
				targetWord: '',
				treeList: [],
				classA: [],
				classB: [],
				classC: []
			}
		},
		created() {
			let self = this;
			this.menuListBtn();
			this.targetWord = localStorage.getItem('target');
			self.menuList = JSON.parse(localStorage.getItem('aList')) == null ? [] : JSON.parse(localStorage.getItem('aList'));
			if(this.menuList != null) {
				var vue = this.targetWord.slice(0, this.targetWord.indexOf('&'));
				console.log(vue);
				if(vue != 'undefine') {
					self.$router.push({path:'/'+vue});
				} else {
					self.$router.push({path:'/home'});
				}
			}
		},
		computed: {
			onRoutes() {
				return this.$route.path.replace('/', '');
			}
		},
		methods: {
			oneLevel($event) {
				let self = this;
				$($event.target).parent('li').siblings('li').children('ul[class=menuStyleOne]').slideUp();
				$($event.target).parent('li').siblings('li').children('div').children('b').removeClass('open-hover');
				$($event.target).siblings('ul[class=menuStyleOne]').slideToggle();
				$('.menuStyleTwo').slideUp();
				$('i[class~=open-hover]').removeClass('open-hover');
				$($event.target).children('b').hasClass('open-hover') ? $($event.target).children('b').removeClass('open-hover') : $($event.target).children('b').addClass('open-hover');
			},
			twoLevel($event) {
				let self = this;
				$($event.target).parent('li').siblings('li').children('ul[class=menuStyleTwo]').slideUp();
				$($event.target).parent('li').siblings('li').children('div').children('i').removeClass('open-hover');
				$($event.target).siblings('ul[class=menuStyleTwo]').slideToggle();
				$($event.target).children('i').hasClass('open-hover') ? $($event.target).children('i').removeClass('open-hover') : $($event.target).children('i').addClass('open-hover');
			},
			menuListBtn() {
				let self = this;
				self.$api.post(self.url.initMenu + '?username=' + JSON.parse(localStorage.getItem('adminInfo')).loginname + '&password=' + JSON.parse(localStorage.getItem('adminInfo')).password + '&city=hangzhou', {}, function(r) {
					for(var i = 0; i < r.data.length; i++) {
						if(r.data[i].menuLevel == '1') {
							self.classA.push(r.data[i]);
						} else if(r.data[i].menuLevel == '2') {
							self.classB.push(r.data[i]);
						} else if(r.data[i].menuLevel == '3') {
							self.classC.push(r.data[i]);
						}
					}
					console.log(self.class3);
				}, function(r) {
					console.log(r);
				}, self.url.MOCK);
			},
			openThird($event) {
				let self = this;
				var secondeMenus = document.getElementsByClassName('secondeMenu');
				for(var i = 0; i < secondeMenus.length; i++) {
					if(secondeMenus[i] == $event.target) {
						$($event.target).children('ul').fadeIn();
					} else {
						$(secondeMenus[i]).children('ul').fadeOut();
					}
				}
			},
			closeThird() {

			},
			navigationList() {
				let self = this;
			},
			show(men, word) {
				this.$router.push({
					path: '/' + men
				})
				var mena = men + '&' + word;
				let self = this;
				self.openFlag11 = false;
				this.currentName = name;
				console.log(mena);
				var menuLists = self.menuList;
				if(menuLists.length == 0) {
					localStorage.setItem('target', mena);
					self.targetWord = localStorage.getItem('target');
					console.log(localStorage.getItem('target'));
					self.menuList.push(mena);
					localStorage.setItem('aList', JSON.stringify(self.menuList));
				} else {
					for(var i = 0; i < menuLists.length; i++) {
						console.log(i);
						if(menuLists[i] == mena) {
							localStorage.setItem('target', mena);
							var lis = document.getElementsByClassName('close-show');
							for(var j = 0; j < lis.length; j++) {
								if($(lis[j]).parent().text().substr(1) == mena.slice(mena.indexOf('&') + 1)) {
									$(lis[j]).parent().children('i').hide();
									$(lis[j]).parent().addClass('active').siblings().removeClass('active');
									$(lis[j]).parent().siblings().children('i').show();
								}
							}
							break;
						} else if(i == menuLists.length - 1) {
							localStorage.setItem('target', mena);
							self.targetWord = mena;
							self.menuList.push(mena);
							localStorage.setItem('aList', JSON.stringify(self.menuList));
							self.$nextTick(function() {
								var lisy = document.getElementsByClassName('yint'),
									listWidth = 0,lastWidth = 0;
								for(var k = 0; k < lisy.length; k++) {
									console.log($(lisy[k]).css('width'));
									listWidth = listWidth +46+ parseInt($(lisy[k]).css('width'));
									if(k == lisy.length -1){
										lastWidth = parseInt($(lisy[k]).css('width'));
									}
								}
								var divW = parseInt($('.menu-box').css('width'));
								if(listWidth > divW){
									$('.menu-list').animate({
										'left':-(Math.abs(parseInt($('.menu-list').css('left'))) + lastWidth)+'px'
									});
								}
							});
						}
					}
				}
			},
			deleteMenu(vue, $event) {
				let self = this;
				var changeInt = self.menuList;
				console.log(changeInt.length);
				for(var i = 0; i < changeInt.length; i++) {
					if(changeInt[i] == vue) {
						changeInt.splice(i, 1);
						localStorage.setItem('aList', JSON.stringify(changeInt));
						//						var act = document.getElementsByClassName('active');
						//						$(act[0]).removeClass('active');
					}
				}
				if(localStorage.getItem('target') == vue) {
					localStorage.setItem('target', changeInt[changeInt.length - 1]);

				}
				self.menuList = changeInt;
				self.targetWord = localStorage.getItem('target');
				console.log(self.targetWord);
				var vues = self.targetWord.slice(0, self.targetWord.indexOf('&'));
				console.log(vues);
				if(vues != 'undefine') {
					self.$router.push({path:'/' + vues});
				} else {
					self.$router.push({path:'/home'});
				}
				$event.cancelBubble = true;
			},
			showMenu(vue, $event) {
				let self = this;
				localStorage.setItem('target', vue);
				$($event.target).children('i').hide();
				$($event.target).siblings().children('i').show();
				var vue = vue.slice(0, vue.indexOf('&'));
				self.$router.push({path:'/'+vue});
				$($event.target).addClass('active').siblings().removeClass('active');
			},
			prev_icon() {
				if(parseInt($('.menu-list').css('left')) <= -60) {
					$('.menu-list').animate({
						'left': parseInt($('.menu-list').css('left')) + 60 + 'px'
					}, 200)
				} else {
					$('.menu-list').animate({
						'left': '0px'
					}, 200)
				}
			},
			next_icon() {
				var lisy = document.getElementsByClassName('yint'),
					listWidth = 0;
				for(var k = 0; k < lisy.length; k++) {
					listWidth = listWidth+ 46 + parseInt($(lisy[k]).css('width'));
				}
				var divW = parseInt($('.menu-box').css('width')) + Math.abs(parseInt($('.menu-list').css('left')));
				if(listWidth > divW){
					$('.menu-list').animate({
						'left': parseInt($('.menu-list').css('left')) - 60 + 'px'
					}, 200)
				}
			},
			ifShow(name) {
				//				this.openFlag1 = false;
				return this.currentName == name;
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
		padding-left: 18px;
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
		top: 16px;
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
		background: #2E363F;
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