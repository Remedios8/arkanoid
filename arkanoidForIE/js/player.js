var i1=1;
var timePassed1p=200;
var start1p=0;
var timePassed2p=200;
var start2p=0;
var img1 = new Image();
var img1Loaded = false;
  var d=0;
img1.onload = function(){
  img1Loaded = true;
}
var timePassedwu=500;
var startwu=0;

var player={
hp:3,
x:50,
y:360,
width:50,
height:76,
speed:4,
dx:0,
score:0,

updscore:function(score){
	this.score+=score;
	
},
updhp:function(hp){
	this.hp-=hp;
	timePassedwu = Date.now() - startwu;
if(timePassedwu<500){
 startwu = Date.now();
	 ctx.fillStyle = "white";
    ctx.strokeStyle = "#F00";
	ctx.font = "small-caps 20pt Beauty and the Beast";
ctx.fillText("}", 155, 80);}
	
},

draw:function(num1){

var wi=100,he=100;
var x=0;

var startp = Date.now();
var a=this.x;
var b=this.y;

drawImage1(i1,1,a,b,d);
//timePassed1 = Date.now() - start1;
if(isKeyDown('A')){
	d=0;
	timePassed1p = Date.now() - start1p;
if(timePassed1p>=200){
 start1p = Date.now();
if(i1>=4)i1=1;
else i1+=1;}}
else if(isKeyDown('D')){
	d=104;
timePassed2p = Date.now() - start2p;
if(timePassed2p>=200){
 start2p = Date.now();
if(i1>=4)i1=1;
else i1+=1;}}
else {i1=2;}


function drawImage1(num1,speed1,a,b,d){

num1=num1?num1-1:0;
x+=speed1?speed1:0;

if (img1Loaded)ctx.drawImage(img1,82*num1,d,82,104,a,b,82,104); 

}
},
move:function(){
if(isKeyDown('A')){
	
	this.x-=this.speed;
	this.dx=-1;
}else if(isKeyDown('D')){
	this.x+=this.speed;
	this.dx=1;
}else{
	this.dx=0;
}

},

 collision: function (){
  if (this.x >= 560&&this.x!=1000) {
   this.x = 560; 
   }
  if (this.x <= 0) {
   this.x = 0; 
   }
  },
  
  init:function(x,w,color){
	  this.x=x;
	  //this.y=y;
	  this.width=w;
	  this.color=color;
	  
  }

};