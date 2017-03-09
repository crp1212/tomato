import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
require('./css/base.css')
'use strict'
const count = require('./component/count.vue')
const edit = require("./component/edit.vue")
const routes=[
	/*{
		path:"/user/:id",
		component:User,
		children:[
			//{path:"",component:userSpace},
			//{path:":name",component:userNames},

		]
	},*/
	{path:"/count",component:count},
	{path:"/edit",component:edit}
]
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

const app = new Vue({
	el:"#app",
	data:{
		title:'count'
	},
	methods:{
		countStart:()=>{
			console.log(this.$refs)
		}
	},
	router:router,
}).$mount('#app')