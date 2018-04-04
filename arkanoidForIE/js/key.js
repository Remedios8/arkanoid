var keys={
	'W':87,
	'S':83,
	'A':65,
	'D':68,
	'P':80,
	'E':69
	
	}

var keyDown={};

var isAnyKeyDown=function(){
	for (var k in keyDown){
		if (keyDown[k])
return true;}}
		

var setKey=function(keyCode){
	keyDown[keyCode]=true;
};

var clearKey=function(keyCode){
	keyDown[keyCode]=false;
};
var isKeyDown=function(keyName){
	return keyDown[keys[keyName]]==true;
};

window.onload=function(){
	window.onkeydown=function(e){
		setKey(e.keyCode);
	};
	
window.onkeyup=function(e){
	clearKey(e.keyCode);
};

}