var _renderer=(function(){
return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||
window.msRequestAnimationFrame||
function(callback){
setTimeout(callback,1000/60);
};//когда не в состоянии вернуть корректный requestAnimationFrame
})();

var _engine=function(){// игровой цикл
	console.log('Игровой цикл не инииаизирован');
};

//функция для старта игры
var startGame=function(game){//берет функцию game и присваивает ее игровому циклу
	if(typeof game=='function'){
		_engine=game;
	}
	gameLoop();
	
};
var setGame=function(game){
	if (typeof game=='function'){
		_engine=game;
	}	
};
//обработка выполнения игрового цикла
var gameLoop=function(){
	_engine();
	_renderer(gameLoop);//перезапуск самой себя
	
};
var  pauseGame=function(game) {
    game = clearTimeout(game);
 
};