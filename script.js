let displayMenu = document.getElementById('displayMenu');
let button = document.getElementById('button');
let quantityCards = 3;
let level = document.querySelector('.start__level').getAttribute('id');
let randomI = 0;
let arr = [];
let goToMenu = false;

document.querySelectorAll('li.start__level').forEach(e => {
	e.addEventListener('click', levelClick)
})

 function levelClick(e) {
 	level = e.target.getAttribute('id')
		switch (level) {
			case 'easyLevel':
			quantityCards = 3;
			break;
			case 'normalLevel':
			quantityCards = 6;
			break;
			case 'hardLevel':
			quantityCards = 10;
			break;
		}
 	document.getElementById('easyLevel').classList.remove('selected', 'red');
 	document.getElementById('normalLevel').classList.remove('selected', 'red');
 	document.getElementById('hardLevel').classList.remove('selected', 'red');
 	e.target.classList.add('selected','red');
 	button.addEventListener('click', buttonClick) 
 }

 function createCard() {
	let newCard = document.createElement('div');
	newCard.className = 'game__card'
	document.querySelector('.game').append(newCard)
	if( quantityCards > 3){
			newCard.classList.add('game__hard__card')
		} else{
			newCard.classList.remove('game__hard__card')
		}
	newCard.addEventListener('click', rotateCard) 
	};
	
 function rotateCard(e) {
 	goToMenu ? window.location.reload() : ''
	if(e.target === arr[randomI]){
		arr[randomI].classList.add('rotate__bag__card');
		} else {
			e.target.classList.add('rotate__card')
	}
		goToMenu = true;
}

	function buttonClick() {
	displayMenu.classList.add('displayNone');
	let section = document.createElement('section');
	section.className = 'game';
	document.body.append(section);
	if( quantityCards === 10){
			document.querySelector('.game').classList.add('game__hard')
		} else{
			document.querySelector('.game').classList.remove('game__hard')
	}
	randomI = Math.floor(Math.random() * (quantityCards-1));
		for (let i = 0; i < quantityCards; i++) {
		createCard();
		if (i === arr[randomI]) {
	arr[randomI].classList.remove('rotate__card');
    arr[randomI].classList.add('rotate__bag__card');
			}
		}
	arr = document.querySelectorAll('.game__card');
}
