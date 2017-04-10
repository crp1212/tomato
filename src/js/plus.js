var plusObj=(function(){
	var _=function(){};
	_.vibrate=function(count,interval,time){//time是震动持续s时间，默认为500ms;count是震动的次数;interval是时间间隔
		var i=0;
		while(i!=count){
			setTimeout(function(){
				if(window.plus){
					plus.device.vibrate(time)
				}
			},i*interval*1000)
			i++
		}
	} 
	_.quit=function(){
		plus.runtime.quit();
	}
	_.keyEvent=function(type,callback){
		plus.key.addEventListener(type,callback);
	}
	_.toast=function(message,options){
		plus.nativeUI.toast( message, options )
	}
	return _
})()
export {plusObj}