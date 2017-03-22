<template>
		<div class='container' @click='editStateChild' @touchstart='touchFn' @touchend='touchFn' :class='{complete:isComplete,bo_red:isRed}'>
			<div class='done' @touchstart='completeFn' :class={dn:isNone} >X</div>
			<div class="textdiv">
				<span>计划</span>
				<span>{{content}}</span>
			</div>
			<div class="textdiv">
				<span class='fl'>时间</span>
				<div class="dib">
				{{nums}}
					<ul class="uls" style="">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
</template>
<style scoped>
	.container{
		border:1px solid blue;
		border-radius: 20px;
		width:95%;
		height:90px;
		margin:5px auto;
		position:relative;
		transition: all 0.3s;
	}
	.bo_red{
		border:1px solid red;
	}
	.complete{
		margin:0;
		width:0;
		height:0;
		border:none;
	}
	.done{
		display: inline-block;
		width:20px;
		height:20px;
		position:absolute;
		text-align: center;
		right:0;
		top:-5px;
		color:white;
		border-radius: 10px;
		background: gray;
	}
	.textdiv{width:100%;height:45px;line-height: 45px;overflow:hidden;}
	.textdiv span{float:left;}
	.textdiv span:nth-child(1){margin:0 10px ;}
	.textdiv span:nth-child(2){display:inline-block;max-width:80%;text-overflow: ellipsis;white-space: nowrap;overflow:hidden;}
	.uls{list-style: none;line-height: 45px;height:45px;}
	.uls li{
		/* background:url(./images/dark.png); */
		width:30px;
		height:30px;
		float:left;
		background-size: cover;
		margin:7.5px 5px;
	}
	.fl{float:left;}
	.dib{display:inline-block;}
	.dn{display: none}
</style>
<script>
	module.exports={
		props:['content','nums','isRed'],
		data:function(){
			return {
				isComplete: false,
				isNone: false,
				bool: false,
			}
		},
		methods:{
			editStateChild:function(){
				this.$emit('editStateChild')
			},
			touchFn:function(e){
				if(e.type=='touchstart'){
					var _this=this;
					this.bool=true;
					setTimeout(function(){
						if(_this.bool){
							_this.$emit('touchFn');
						}
					},500)//长按0.5s
				}else if(e.type=='touchend'){this.bool=false}
			},
			completeFn:function(){
				this.isComplete=true;
				this.isNone=true;
				this.$emit('completeFn');
			}
		}	
	}
</script>