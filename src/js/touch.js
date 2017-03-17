import {sel} from './sel.js'
var touch=function(){
	var startX,endX;
	var touchFn=function(e,d){
		var touches = e.changedTouches;
		if(e.type=='touchstart'){
			startX=touches[0].pageX
		}else{
			endX=touches[0].pageX;
			if(endX-startX>50){
				sel('#sidebar').css('left','0px');
				sel('.cover_box').css('opacity','0.4')
			}else if(startX-endX>50){
				sel('#sidebar').css('left','-80%')
				sel('.cover_box').css('opacity','0')			
			}
		}
	}
	sel('body').addEvent('touchstart',touchFn,false);
	sel('body').addEvent('touchend',touchFn,false)

}
export {touch} 