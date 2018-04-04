
var witch1 = new Image();
var witch1Loaded = false;
witch1.onload = function(){
  witch1Loaded = true;
}
var iw=1;
var timePassedw=500;
var startw=0;

var witch={

x:1,
y:0,
width:50,
height:67,
xball:0,
yball:0,
radius:10,
way:'mad.gif',
speedy:3,
speed:1,
dx:-1,
dy:1,
type:1,
s:1,
ddx:1,

draw:function(){

var wi=100,he=100;

 var a=this.x;

var startww = Date.now();
var timerw = setInterval(function(){
var timePassedww = Date.now() - startww;
  if (timePassedww >= 45) {
    clearInterval(timerw); 
    return;
  }

  
drawImagew(iw,1,a);
timePassedw = Date.now() - startw;
if(timePassedw>=500){

 startw = Date.now();
if(iw>=4){iw=1;}
else {iw+=1;} 
}
},10);

function drawImagew(num,speed,a){
ctx.save();

num=num?num-1:0;
if (witch1Loaded)ctx.drawImage(witch1,60*num,0,60,67,a,80,60,67); 

ctx.restore();

}



},
init:function(x,y){
this.x=x;
this.y=y;

},

drawball:function(){

var a=this.xball;
var b=this.yball;

pic1       = new Image();             
      pic1.src    = this.way;  
      pic1.onload = function() {    
	  ctx.drawImage(pic1, a-5,b-5);}
	  
},
initball:function(x,y,radius,way){
this.xball=x;
this.yball=y;
this.radius=radius;
s=getRandomInt(1,4);
if(s==1){
this.way='mad.gif';
ballf();}
if(s==2){
this.way='mad2.gif';}
if(s==3){
this.way='mad3.gif';}

},
move:function(){

this.x=this.x+(this.ddx*this.speed);
if(this.x==0||this.x==600){
this.ddx=this.ddx*(-1);}

},
moveb:function(){

this.yball+=this.speedy*this.dy;
},
collision:function(){
if(isCollision(this.xball-this.radius,this.yball-this.radius,this.radius*2,this.radius*2,player.x,player.y,player.width,player.height)){
if(s==1){if(player.hp>0){

player.hp=player.hp-1;
this.xball=800;}
else{
	grid.clear();
   ball.clear();
   setGame(pause);
	  backgroundAudio.pause();
	  Witch();
 openNav3();
  // setInterval(location.reload(), 50000);
}}
if(s==2){
player.speed--;
this.xball=800;}

if(s==3){
ball.speedx++;
ball.speedy++;
this.xball=800;}


}
}


};
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function ballf() {
  var audiof = new Audio();

  audiof.src = 'img/bomb.mp3'; 
 
  audiof.autoplay = true;
  audiof.volume = 0.05;
 
}
function Witch() {
  
  var audiow = new Audio(); 
 
  audiow.src = 'img/witch.mp3';

  audiow.autoplay = true; 

  audiow.volume = 0.8;
}


