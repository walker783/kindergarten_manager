<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead, vSidebar
        }
    }
</script>
<style type="text/css">
	.el-submenu__title{
		text-align: left !important;
		padding-left: 10px;
	}
	.erjiMenu>.el-submenu>.el-submenu__title{
		padding-left: 40px !important;
	}
	.el-submenu__title,.el-menu-item{
		height: 44px;
		line-height: 44px;
		color: #eee;
	}
	.el-submenu .el-menu-item {
	    height: 42px;
	    line-height: 42px;
	    padding: 0 45px;
	    background: #2D3F51;
	}
</style>
