let easyLvl = document.getElementById('easyLevel');
let normalLvl = document.getElementById('normalLevel');
let hardLvl = document.getElementById('hardLevel');
let easyLvlCheck = document.getElementById('easyCheck');
let normalLvlCheck = document.getElementById('normalCheck');
let hardLvlCheck = document.getElementById('hardCheck');
let displayMenu = document.getElementById('displayMenu');
let button = document.getElementById('button');

document.addEventListener("DOMContentLoaded", () => {
    easyLvlCheck.classList.add('menu__start__rhomb');
	normalLvlCheck.classList.remove('menu__start__rhomb');
	hardLvlCheck.classList.remove('menu__start__rhomb');
	displayMenu.classList.remove('displayNone');
  });

easyLvl.addEventListener( 'click', () => {
	easyLvl.classList.add('selected');
	normalLvl.classList.remove('selected');
	hardLvl.classList.remove('selected');
	easyLvlCheck.classList.add('menu__start__rhomb');
	normalLvlCheck.classList.remove('menu__start__rhomb');
	hardLvlCheck.classList.remove('menu__start__rhomb');
})

normalLvl.addEventListener( 'click', () => {
	normalLvl.classList.add('selected');
	easyLvl.classList.remove('selected');
	hardLvl.classList.remove('selected');
	easyLvlCheck.classList.remove('menu__start__rhomb');
	normalLvlCheck.classList.add('menu__start__rhomb');
	hardLvlCheck.classList.remove('menu__start__rhomb');
})

hardLvl.addEventListener( 'click', () => {
	hardLvl.classList.add('selected');
	normalLvl.classList.remove('selected');
	easyLvl.classList.remove('selected');
	easyLvlCheck.classList.remove('menu__start__rhomb');
	normalLvlCheck.classList.remove('menu__start__rhomb');
	hardLvlCheck.classList.add('menu__start__rhomb');
})
let hard = hardLvl.addEventListener();

button.addEventListener( 'click', () => {
	displayMenu.classList.add('displayNone');
	var section = document.createElement('section');
	section.className = 'game';
	document.body.append(section);
	var div = document.createElement('div');
	div.className = 'game__cards';
	document.body.append(div);
	div.onclick = function () {
	div.style.background = "url(img/end.png)";
	div.style.transform = "none";
}
})

