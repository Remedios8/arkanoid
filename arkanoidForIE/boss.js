var boss={
x:50,
y:140,
width:50,
height:76,


draw:function(i,timePassed1,start1){

//drawRect(this.x,this.y,this.width,this.height,this.color);
var wi=100,he=100;
var image=document.getElementById('image');
var x=0;

var start = Date.now();
var a=this.x;
var b=this.y;
var timer = setInterval(function(){
var timePassed = Date.now() - start;
  if (timePassed >= 2000) {
    clearInterval(timer); // конец через 2 секунды
    return;
  }
  
drawImage('image.gif',i,1,a,b);
timePassed1 = Date.now() - start1;
if(timePassed1>=500){
 start1 = Date.now();
if(i>=4)i=1;
else i+=1;}

},10);

function drawImage(img,num,speed,a,b){

num=num?num-1:0;
x+=speed?speed:0;
image.onload=function(){
//wi=image.width;
//he=image.height;
ctx.drawImage(image,50*num,0,50,76,a,b,50,76); 
image.style.display='none';};
image.src=img;}

}
}; 

