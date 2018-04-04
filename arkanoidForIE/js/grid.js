var grid={
nodes:[],//массив объектов
m:[],

add:function(x,y,w,h){
var tmp=new _Enemy(x,y,w,h);
this.nodes.push(tmp);

},
generate:function(count,w,h){
var dw=5,
dx=dw,dy=dw,
dcountx=Math.ceil(width/(w+dw))-1;

dallw=Math.ceil((width-(w+dw)*dcountx)/2);
dy=dallw;
for(var i=0;i<count;i+=1){
for(var j=0;j<dcountx;j+=1){
if(j==0){
dx+=Math.ceil(dallw-dw/2);
}
this.add(dx,dy,w,h);
dx+=w+dw;}
dy+=h+dw;
dx=dw;
}
},
create:function(map){

var  doffsetx=(width-(map.tiles[0].length*(map.width+map.offset)))/2;

for(var t1 in map.tiles){
for(var t2 in map.tiles[t1]){
	this.m.push(map.tiles[t1][t2]);
var tile=map.tiles[t1][t2];
var dx= doffsetx+t2*(map.width+map.offset);
var dy= map.offset+t1*(map.height+map.offset);
if (tile==1){
this.add(dx,dy,map.width,map.height);
}
}
}

},

destroy:function(id){
	
	this.nodes.splice(id,1);
this.m.splice(id,1);
soundDog();
soundDeath();



  if (this.nodes <= 0){
   //document.getElementById('win').style.display = 'inline';
   grid.clear();
   ball.clear();
   setGame(pause);
	 backgroundAudio.pause();
	  win();
   openNav4();
    win();
  //setInterval(location.reload(), 50000); // ссылка на следующий LvL
   
  }

},

clear:function(){
this.nodes=[]
},

draw:function(){
for(en in this.nodes){
	
this.nodes[en].draw();
}
},


};

var _Enemy=function(x,y,w,h){
this.x=x;
this.y=y;
this.width=w;
this.height=h;

};


var i=1;
var timePassed1g=500;
var start1g=0;
var img = new Image();
var imgLoaded = false;

img.onload = function(){
  imgLoaded = true;
}

_Enemy.prototype.draw=function(num){ 

var startg = Date.now();
var a=this.x;
var b=this.y;
var timerg = setInterval(function(){
var timePassedg = Date.now() - startg;
  if (timePassedg >= 200) {
    clearInterval(timerg); 
    return;
  }
  
drawImage(i,1,a,b);
timePassed1g = Date.now() - start1g;
if(timePassed1g>=500){
 start1g = Date.now();
if(i>=4)i=1;
else i+=1;}

},10);

function drawImage(num,speed,a,b){
ctx.save();
num=num?num-1:0;
if (imgLoaded)ctx.drawImage(img,43*num,0,43,40,a,b,43,40); 
ctx.restore();
}

}; 
function win() {
  
  var win = new Audio(); 
 
  win.src = 'img/win.mp3';

 win.autoplay = true; 

 win.volume = 1;
}


function soundDog() {
  var audio = new Audio();

  audio.src = 'img/death.mp3'; 
 
  audio.autoplay = true; 
  audio.volume = .1;
 
}

function soundDeath() {
  
  var audio1 = new Audio(); 
 
  audio1.src = 'img/cat.mp3';
  
  audio1.autoplay = true; 
  audio1.volume = .1;
}


