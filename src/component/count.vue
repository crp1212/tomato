<template>
	<div>
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<canvas :width='winWidth' :height='winHeight' id="canvas"></canvas>
		<div class="start" v-show='isShow' :class={restState:isRest} @click='countStart'>{{title}}</div>
	</div>
</template>
<script>
	import headChild from './text/header-text.vue'
	import {headContentData,dataUpdate} from "../storage/data.js"
	import {sto} from "../storage/storage.js"
	import {plusObj} from "../js/plus.js"
	export default {
		data:function(){
			return {
				headContent:headContentData('count'),
				winWidth:window.innerWidth,
				winHeight:window.innerHeight,
				isShow:true,
				timer:"",
				title:"开始",
				isRest:false,
			}
		},
		components:{
			'head-child':headChild,
		},
		methods:{
			countFn:function(sec,sep){
				var winWidth=window.innerWidth;
				var winHeight=window.innerHeight;
				var totalNum=sep*sec;
				var x=0;
				var i=0;
				var numFn=(num)=>{
					var miu=num/60>=10?parseInt(num/60):'0'+parseInt(num/60);
					var sec=num%60>=10?num%60:'0'+num%60;
					return miu+':'+sec
				}
				var c=document.getElementById("canvas");
				var ctx=c.getContext("2d");
				this.ctx=ctx;
				var run=()=>{
					ctx.beginPath();
			        ctx.arc(winWidth/2,winHeight/2,100,0*Math.PI,2*Math.PI);
			        ctx.lineWidth=10;
			        ctx.lineCap='round';
			        ctx.strokeStyle="#0000ff";
			        ctx.stroke()
					ctx.beginPath();
					ctx.arc(winWidth/2,winHeight/2,100,0*Math.PI,(2-2*x/totalNum)*Math.PI);
					ctx.lineWidth=10;
					ctx.lineCap='round';
					ctx.strokeStyle="red";
					ctx.font='40px Arial';
					ctx.textAlign="center";
					ctx.textBaseline='middle'
					ctx.fillText(numFn(sec),winWidth/2,winHeight/2)
					ctx.stroke();
					
				}
				run();
				var _this=this
				this.timer=setInterval(()=>{
					i++;
					x++;
					if(i==25){
						sec--;
						i=0;
					};
					ctx.clearRect(0,0,winWidth,winHeight)
					if(sec==0){//计时完毕后
						clearInterval(_this.timer);
						if(JSON.parse(sto('planDoing'))){
							var index=JSON.parse(sto('planDoing')).index;
							dataUpdate({"index":index},'unFinishedPlan')
						}
						plusObj.vibrate(5,1);
						if(!this.isRest){
							this.restFn()
						}else{
							this.isRest=false;
							this.isShow=true;
							this.title='开始'
						}
						return ''
					 }

					run();
				},1000/sep)
			},
			countStart:function(){
				this.isShow=false;
				var timeVal=sto('timeLength')||1500
				console.log(timeVal)
				this.countFn(timeVal,25);
			},
			headBtnFn:function(){
				this.isShow=true;
				this.isRest=false;
				this.title='开始'
				this.ctx.clearRect(0,0,this.winWidth,this.winHeight)
				clearInterval(this.timer)
			},
			restFn:function(){
				this.title='休息时间';
				this.isShow=true;
				this.isRest=true;
				var timeVal=sto('timeRest')||200
				console.log(timeVal)
				this.countFn(timeVal,25);
			}
		},
		created:function(){
		    // 组件创建完后获取数据，
		    // 此时 data 已经被 observed 了
		    //this.countStart()
		    
		 },
	}
</script>
<style scope lang='sass'>
	@import "../scss/rem" ;
	#canvas{
		position:absolute;
		top:pxToRem(0px);
	}
	.start{
		position:absolute;
		height:100vh;
		line-height:100vh;
		text-align:center;
		top:0;
		width:100%;
		font-size:pxToRem(40px);
	}
	.restState{
		top:pxToRem(-150px);
	}
</style>