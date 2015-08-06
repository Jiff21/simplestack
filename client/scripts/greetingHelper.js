'use strict';

var welcome,
	now = new Date().getHours();
	
switch (true) {
case (now < 3):
	welcome = 'Shouldn&#39;t you be at a bar?';
	break;

case (now < 7):
	welcome = 'Why are you awake?';
	break;

case (now < 12):
	welcome = 'Good Morning.';
	break;

case (now < 17):
	welcome = 'Good afternoon.';
	break;

case (now < 21):
	welcome = 'Good evening.';
	break;

case (now < 23):
	welcome = 'Good night.';
	break;

case (now >= 23):
	welcome = 'Go to Sleep!';
	break;
}

console.log(welcome + ' You need to fix this message so it will wait until meteor renders the element.');
// window.onload = function () {
// 	document.getElementById('welcome-message').innerHTML = welcome;
// };