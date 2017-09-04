
var img2 = new Image();
var img2Loaded = false;
img2.onload = function(){
  img2Loaded = true;
}
var ddeath = new Image();

var ddLoaded = false;
ddeath.onload = function(){
  ddLoaded = true;
}
var daddy = new Image();

var daddyLoaded = false;
daddy.onload = function(){
  daddyLoaded = true;
}
var puppy = new Image();
var puppyLoaded = false;
puppy.onload = function(){
  puppyLoaded = true;
}

pic       = new Image();  
var picLoaded = false;
pic.onload = function(){
  picLoaded = true;
}


var i=1;
var timePassed1=500;
var start1=0;
var timep=1500;
var startt=0;

var ball={
speedx:1,
speedy:1,
dx:1,
dy:-1,
color:'blue',
x:0,
y:0,
radius:5,
clear:function(){
	this.speedx=1;
	this.speedy=1;
	this.dx=1;
	this.dy=-1;
},

draw:function(){

var a=this.x;
var b=this.y;

if (this.dy==1){

     if (picLoaded) {    // Событие onLoad, ждём момента пока загрузится изображение
ctx.drawImage(pic, a-5,b-5);}
}

if (this.dy==-1&&this.dx==-1) {
	pic       = new Image();              // "Создаём" изображение
    pic.src    = 'p2.gif';  // Источник изображения, позаимствовано на хабре
     pic.onload = function() {    // Событие onLoad, ждём момента пока загрузится изображение
ctx.drawImage(pic, a-5,b-5);}
	
}


else{
	pic       = new Image();              // "Создаём" изображение
    pic.src    = 'upu.gif';  // Источник изображения, позаимствовано на хабре
     pic.onload = function() {    // Событие onLoad, ждём момента пока загрузится изображение
ctx.drawImage(pic, a-5,b-5);}
}
	  
	  
	  
},
init:function(x,y,radius,color){
this.x=x;
this.y=y;
this.radius=radius;
this.color=color;
},
move:function(){
this.x+=this.speedx*this.dx;
this.y+=this.speedy*this.dy;
},

collision:function(){
for(var i in grid.nodes){
var enemy=grid.nodes[i];//ссылка на объект
if(isCollision(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2,enemy.x,enemy.y,enemy.width,enemy.height)){
this.dy*=-1;
grid.destroy(i);
this.speedy+=0.1;
//
player.speed+=0.1;

player.updscore(1);
var a=enemy.x;
var b=enemy.y;
var u9=0;
var timePassed3=200;
 var start3=0;
var start = Date.now();
//timePassed1 = Date.now() - start1;
	var timer = setInterval(function(){
var timePassed = Date.now() - start;
  if (timePassed >= 1000) {
    clearInterval(timer); // конец через 2 секунды
    return;
	
  }
  drawImage2(u9,1,a,b); 
timePassed3 = Date.now() - start3;
if(timePassed3>=200){
 start3 = Date.now();
if(u9<4)u9++;

}

},10);
}


function drawImage2(num1,speed1,a,b){
ctx.save();
// context.clearRect(0, 0, canvas.width, canvas.height);
num1=num1?num1-1:0;
//x+=speed1?speed1:0;
//image.onload=function(){
//wi=image.width;
//he=image.height;
if (img2Loaded)ctx.drawImage(img2,50*num1,0,50,76,a,b,50,76); 
//image.style.display='none';};
ctx.restore();

}
}

if(isCollision(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2,player.x,player.y,player.width,5)){
this.dy*=-1;
soundDog();
if(this.dx==player.dx){
	this.speedx*=1.2;
}else{
	this.speedx/=player.dx!=0?1.2:1;
}
this.dx=player.dx||this.dx;
}
if(isCollision(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2,witch.x,witch.y,witch.width,witch.height)){
timep=Date.now()-startt;
if(timep>1500){
	startt=Date.now();
wiwi();
player.score=player.score+10;}
}


if(this.x+this.radius>=620){
this.dx*=-1;
//soundDog();
}
if(this.x-this.radius<=0){
	//soundDog();
this.dx*=-1;
}

if(this.y-this.radius<=0){
	soundDog();
	this.dy=1;
}
if(this.y+8>=height){
	if(player.hp<1){
		grid.clear();
		setGame(pause);
	  backgroundAudio.pause();
	  Witch();
 openNav3();
  // setInterval(location.reload(), 50000);
		}
	else {
		player.speed=0;
		
		Dog();
	var u=1;
 var a=this.x;
  var b=430;

  var timePassed0=0;
 var start0=0;
 
 var df=player.x;

var timePassed3=200;
 var start3=0;
var start = Date.now();
//timePassed1 = Date.now() - start1;
	var timer = setInterval(function(){
var timePassed = Date.now() - start;
  if (timePassed >= 1000) {
    clearInterval(timer); // конец через 2 секунды
    return;
	
  }
  drawImage2(u,1,a,b); 
timePassed3 = Date.now() - start3;
if(timePassed3>=200){
 start3 = Date.now();
if(u<4)u++;
			else{
	var u1=0;
 var a1=player.x;
  var b1=player.y;
player.x=1000;
  var timePassed000=0;
 var start000=0;

var timePassed30=200;
 var start30=0;
var start0 = Date.now();

	var timer0 = setInterval(function(){
var timePassed0 = Date.now() - start0;
  if (timePassed0 >= 2950) {
    clearInterval(timer0); // конец через 2 секунды
    return;
	
  }
  drawImage22(u1,1,a1,b1); 
timePassed30 = Date.now() - start30;
if(timePassed30>=300){
 start30 = Date.now();
if(u1<9){u1++;}
else{ 

	player.x=df;
//player.init(df,82,'red');
	ball.init(10,10,5,'red');
	player.speed=4;
}
}

},10);
	
}

}

},10);
player.updhp(1);

function drawImage2(num1,speed1,a,b){
ctx.save();
//num1=num1?num1-1:0;

if (ddLoaded)ctx.drawImage(ddeath,43.75*num1,0,43.75,50,a,b,43.75,50); 

ctx.restore();
}
function drawImage22(num11,speed1,a,b){
ctx.save();
//num11=num11?num11-1:0;

if (daddy)ctx.drawImage(daddy,190*num11,0,190,100,a,b,190,100); 
ctx.restore();

}


ball.clear();
ball.init(1000,10,5,'red');
	
	}
	
}}

};

function Dog() {
  var audio4 = new Audio();

  audio4.src = 'fall.mp3'; 
 
  audio4.autoplay = true;
  audio4.volume = 0.1;
 
}
function Witch() {
  
  var audiow = new Audio(); 
 
  audiow.src = 'witch.mp3';

  audiow.autoplay = true; 

  audiow.volume = .8;
}
function wiwi() {
  
  var audiowi = new Audio(); 
 
  audiowi.src = 'wiwi.mp3';

  audiowi.autoplay = true; 

  audiowi.volume = .8;
}
