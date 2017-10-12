import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import './mock/index.js';
//import api from '../config/api.js';
import url from '../config/url.js';
import VueQuillEditor from 'vue-quill-editor';
import Quill from 'quill';
import vueResource from 'vue-resource'
var $http = axios.create({

});
//Quill.insertEmbed(10, 'image', 'http://quilljs.com/images/cloud.png');
/*import { ImageImport } from '../modules/ImageImport.js'
import { ImageResize } from '../modules/ImageResize.js'
Quill.register('modules/imageImport', ImageImport)
Quill.register('modules/imageResize', ImageResize)*/
// 将API方法绑定到全局
//Vue.prototype.$api = api;
Vue.prototype.$http = $http;
Vue.prototype.url = url;
Date.prototype.format = function(fmt){
	var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}
Vue.prototype.dailyReport = function(type,id,content,that){
  that.$api.post(that.url.daily_add, {
            "logType": type,
            "logContent": content,
            "userId": id
                }, function(r) {
                    console.log(r);
                },function(){},that.url.MOCK);
}
Vue.use(ElementUI);
Vue.use(VueQuillEditor);
Vue.use(vueResource);
Vue.prototype.$axios = axios;
/*Vue.component('my-icon', {
  template:'<i class="el-icon-check" v-on:click="light=true"></i><i class="el-icon-circle-close" v-on:click="light=false"></i>',
  //template: "<i class='el-icon-check'  :class=''light?''hightLight':'lowLight'' v-on:click='light = true'></i><i class='el-icon-circle-close' :class='light?'lowLight':'hightLight'' v-on:click='light = false'></i>",
  data: function () {
	  return {
	    light: true
	  }
	}
})*/

if(window.localStorage.access_token){
	var access_token = JSON.parse(localStorage.getItem('access_token'));
	Vue.http.headers.common['AccessToken'] = access_token;
}
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');