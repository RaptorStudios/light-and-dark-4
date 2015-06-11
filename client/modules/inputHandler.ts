
//______CHIAMATA A QUESTO MODULO_____
var UP = 3;
var DOWN = 0;
var LEFT = 1;
var RIGHT = 2;
var NONE = -1;

enum INPUT {
    UP = 87,
    DOWN = 83,
    LEFT = 65,
    RIGHT = 68,
    CTRL = 17,
    ENTER = 13,
    W = 87,
    A = 65,
    D = 68,
    S = 83,
    J = 74,
    K = 75,
    CAPS = 20
}

// Chiamata di test
interface inputCallback { (key: number) : void };
var inputCallbackMap: { [key: number ] : inputCallback; } = <any>{};
inputCallbackMap[INPUT.UP] = function(key){ alert("UP") };
inputCallbackMap[INPUT.DOWN] = function(key){ alert("DOWN") };
inputCallbackMap[INPUT.LEFT] = function(key){ alert("LEFT") };
inputCallbackMap[INPUT.RIGHT] = function(key){ alert("RIGHT") };

interface resetCallback { () : void };

initInputHandler(
	inputCallbackMap,
	function(){ }
);


//Flag per stoppare il loop di rendering
var paused = false;

function initInputHandler(inputCallbacks, resetCallback) {
	
	//Ultimo tasto premuto
	var tasto;
	
	document.onkeydown = function(e) {
		inputCallbacks[e.keyCode];
		tasto = e.keyCode;
	};
	document.onkeyup = function(e){
		if(e.keyCode == tasto)
			resetCallback;
	};
	
	document.addEventListener( 'visibilitychange', function onVisibilityChange(){
		if(document.hidden){ 
			paused = true; 
		}else{
			paused = false; 
		} 
	}, false);
	
//	S.c2.addEventListener("mousemove", function(evt){
//		var rect = S.c2.getBoundingClientRect();
//        mouse_x = evt.clientX - rect.left;
//        mouse_y = evt.clientY - rect.top;
//    }, false);
//	S.c2.addEventListener("click", function(ect){
//		usingMouse = true;
//		var mouse_i = Math.floor((mouse_x - S.abs_x) / CELL_W);
//		var mouse_j = Math.floor((mouse_y - S.abs_y) / CELL_H);
//		clickOrTouch(mouse_i,mouse_j);
//	}, false);
//
//	S.c2.addEventListener("touchstart", function(evt){
//		usingMouse = false;
//		evt.preventDefault();
//		var rect = S.c2.getBoundingClientRect();
//		touch_x = event.targetTouches[0].pageX - rect.left;
//        touch_y = event.targetTouches[0].pageY - rect.top;
//		var touch_i = Math.floor((touch_x - S.abs_x) / CELL_W);
//		var touch_j = Math.floor((touch_y - S.abs_y) / CELL_H);
//		clickOrTouch(touch_i,touch_j);
//    }, false);
//	S.c2.addEventListener("touchmove", function(evt){
//		evt.preventDefault();
//		var rect = S.c2.getBoundingClientRect();
//		touch_x = event.targetTouches[0].pageX - rect.left;
//        touch_y = event.targetTouches[0].pageY - rect.top;
//		var touch_i = Math.floor((touch_x - S.abs_x) / CELL_W);
//		var touch_j = Math.floor((touch_y - S.abs_y) / CELL_H);
//		clickOrTouch(touch_i,touch_j);
//	}, false);
//	
//	
//	
//	function clickOrTouch(i,j){
//		var eventSelected = false;
//		for(var id in E){
//			var active_page = E[id][ACTIVE];
//			var e = E[id][active_page];
//			
//			var e_i = Math.floor(e.current_x/CELL_W);
//			var e_j = Math.floor(e.current_y/CELL_H);
//			
//			if(e_i==i && e_j==j){
//				eventSelected = true;
//				if(e == H){
//					//TODO apri l'inventario
//					console.log("open inventory");
//				
//				}else{
//					//TODO valuta evento
//					H.moveTo(i,j,true,function(){});
//				}
//			}
//		}
//		if(eventSelected == false){
//			//Move hero to this coordinates
//			H.moveTo(i,j,true,function(){});
//		}
//	}
	
	
};