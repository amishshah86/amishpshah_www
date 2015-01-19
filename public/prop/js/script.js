
var LAYOUT = {
	positionViewport: function (){
		var viewport = $(GLOBALS.viewportWrap);
		var vw = viewport.width();
		var vh = viewport.height();
		if(GLOBALS.h > vh && !isNaN(GLOBALS.h) && !isNaN(vh)){
			var mt = parseInt(Math.floor((GLOBALS.h - vh) / 2), 10);
		}
		if(GLOBALS.w > vw && !isNaN(GLOBALS.w) && !isNaN(vw)){
			var ml = parseInt(Math.floor((GLOBALS.w - vw) / 2), 10);
		}
		viewport.css({'marginTop': mt, 'marginLeft': ml});
	}
}

jQuery(document).ready(function($) {
	LAYOUT.positionViewport();
});