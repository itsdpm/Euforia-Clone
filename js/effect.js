var trades = ['Programmers', 'Web Designers', 'Developers'];
var i = 0;

setInterval(function(){
	document.getElementById('trade').innerHTML = trades[i%3];
	++i;
}, 2000);
