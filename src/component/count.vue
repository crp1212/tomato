<template>
	<div>
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<canvas :width='winWidth' :height='winHeight' id="canvas"></canvas>
		<div class="start" v-show='isShow' @click='countStart'>开始</div>
	</div>
</template>
<script>
	import headChild from './text/header-text.vue'
	import {headContentData} from "../storage/data.js"
	export default {
		data:function(){
			return {
				headContent:headContentData('count'),
				winWidth:window.innerWidth,
				winHeight:window.innerHeight,
				isShow:true,
				timer:"",
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
				run()
				this.timer=setInterval(()=>{
					i++;
					x++;
					if(i==25){
						sec--;
						i=0;
					};
					if(sec==0){clearInterval(timer); }
					ctx.clearRect(0,0,winWidth,winHeight)
					run();
				},1000/sep)
			},
			countStart:function(){
				this.isShow=false;
				this.countFn(1500,25);
			},
			headBtnFn:function(){
				this.isShow=true;
				this.ctx.clearRect(0,0,this.winWidth,this.winHeight)
				clearInterval(this.timer)
			}
		},
		created:function(){
		    // 组件创建完后获取数据，
		    // 此时 data 已经被 observed 了
		    //this.countStart()
		    
		 },
	}
</script>
<style scope>
	#canvas{position:absolute;top:-50px;}
	.start{position:absolute;height:100vh;line-height:100vh;text-align:center;top:0;width:100%;font-size:40px}
</style>