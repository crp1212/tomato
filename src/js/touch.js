import {sel} from './sel.js'
var touch=function(){
	var startX,endX;
	var touchFn=function(e,d){
		var touches = e.changedTouches;
		if(e.type=='touchstart'){
			startX=touches[0].pageX;
			if(e.target.tagName=='A'){
				console.log(e.target.tagName)
				//setTimeout(function(){fadeFn()},0)
			}
		}else{
			endX=touches[0].pageX;
			if(endX-startX>50){
				sel('#sidebar').css('left','0px');
				sel('.cover_box').css({'opacity':0.4,'z-index':2})
			}else if(startX-endX>50){
				fadeFn()
			}
		}
	}
	var fadeFn=function(){
		sel('#sidebar').css('left','-80%')
		sel('.cover_box').css({'opacity':0,'z-index':-1})
	}
	sel('body').addEvent('touchstart',touchFn,false);
	sel('body').addEvent('touchend',touchFn,false);
	touch.fadeFn=fadeFn;
}
export {touch} 