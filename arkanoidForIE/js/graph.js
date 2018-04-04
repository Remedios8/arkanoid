var fon = new Image();
var fonLoaded = false;
fon.onload = function(){
  fonLoaded = true;
}
var canvas, ctx,width,height;

var init=function(){
	canvas=document.getElementById('canvas');
	width=canvas.width;
	height=canvas.height;
	ctx=canvas.getContext('2d');
	ctx1=canvas.getContext('2d');
			
};
var music=function(m){
	backgroundAudio = new Audio(m);
			backgroundAudio.loop = true;
		backgroundAudio.volume = .25;
			backgroundAudio.load();
		
			
}



var musicup=function(backgroundAudio){
	if(backgroundAudio.volume<=0.9)
		backgroundAudio.volume+=0.01;
	else backgroundAudio.volume=1;
}
var musicdown=function(backgroundAudio){
		if(backgroundAudio.volume>0.01)
			backgroundAudio.volume-=0.01;
		else backgroundAudio.volume=0;

}
var pause=function(backgroundAudio){

		backgroundAudio.pause();	
		
}
var play=function(backgroundAudio){

		backgroundAudio.play();	
		
}
var mus=function(){
	
	if(isKeyDown('W'))
	musicup(backgroundAudio);
if(isKeyDown('S'))
musicdown(backgroundAudio);
if(isKeyDown('P'))
{
	console.log('p');
	if(backgroundAudio.paused){
		play(backgroundAudio);
	}
	else {pause(backgroundAudio);
	}
};}

var fon = new Image();
var fonLoaded = false;
fon.onload = function(){
  fonLoaded = true;
}
var i1=1;
var fillAll =function(){
if (fonLoaded){
	//var imgf=new Image();
	//imgf.src='fff.gif';
	//imgf.onload=function(){
	var ptrn=ctx.createPattern(fon,'repeat');
	ctx.fillStyle=ptrn;
ctx.fillRect(0,0,width,height);
	}
	
};
var clearAll =function(){
	ctx.clearRect(0,0,width,height);
};

var drawRect =function(x,y,w,h,color){
	ctx.fillStyle=color;//может принимать изображение
	ctx.fillRect(x,y,w,h);
};

var drawCircle=function(x,y,r,color){
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,r,0,Math.PI*2, false);
	ctx.fill();
};

var isCollision=function(x1,y1,w1,h1,x2,y2,w2,h2){
	return(x1<x2+w2&&
			x1+w1>x2&&
			y1<y2+h2&&
			h1+y1>y2);
};