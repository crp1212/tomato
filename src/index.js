import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import {sel} from './js/sel.js'
import {touch} from './js/touch.js'
Vue.use(VueRouter);
require('./css/base.css');
'use strict'
const count = require('./component/count.vue')
const edit  = require("./component/edit.vue")
const list  =require('./component/list.vue')
const set   =require('./component/setting.vue')
//添加事件
touch();
//
const routes=[
	/*{
		path:"/user/:id",
		component:User,
		children:[
			//{path:"",component:userSpace},
			//{path:":name",component:userNames},

		]
	},*/
	{
		path:"/",
		component:list,
	},
	{
		path:"/count",
		component:count,
		beforeEnter:(to,from,next)=>{
			next()
		}
	},
	{
		path:"/list",
		component:list,
		beforeEnter:(to,from,next)=>{
			
			next()
		}
	},
	{
		path:"/edit",component:edit,
		beforeEnter: (to, from, next) => {
            
        	next()
      	}
	},
	{
		path:"/set",component:set,
		beforeEnter:(to,from,next)=>{
			
			next()
		}
	}
]
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})
window.Bus=new Vue()
const app = new Vue({
	el:"#app",
	data:{
		title:'Count',
		option:"confirm",
		handChange:"false"
	},
	methods:{
		selOption:function(){
			console.log('this')
		},
		countStartFn:function(){
			
		},
		scheduleFn:function(){
			
		},
		settingFn:function(){
			
		},
		rightFn:function(){
			switch(this.title){
				case 'Schedule':
					
				break;
				case 'Setting':
					
					//此时应该到详情页面写上停止理由
				break;
				case 'exit':
					
				break;
			}
		}
	},
	router:router,
}).$mount('#app')