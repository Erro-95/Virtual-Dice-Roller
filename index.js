const valueInput = document.querySelector('.test');

valueInput.addEventListener('keydown', (e) => {
	if (e.which !== 49 && e.which !== 50 && e.which !== 8) {
		e.preventDefault();
	}
});

document.getElementById('btn').onclick = function () {
	const diceImgs = [
		'images/dice1.png',
		'images/dice2.png',
		'images/dice3.png',
		'images/dice4.png',
		'images/dice5.png',
		'images/dice6.png'
	];

	const random1 = Math.floor(Math.random() * diceImgs.length);
	const random2 = Math.floor(Math.random() * diceImgs.length);

	document.querySelector('.dice1').setAttribute('src', diceImgs[random1]);
	document.querySelector('.dice2').setAttribute('src', diceImgs[random2]);

	if (random1 > random2) {
		document.querySelector('#player1').innerHTML = '🚩 Player 1 🚩';
		document.querySelector('#player2').innerHTML = 'Player 2';
	} else if (random1 < random2) {
		document.querySelector('#player2').innerHTML = '🚩 Player 2 🚩';
		document.querySelector('#player1').innerHTML = 'Player 1';
	} else {
		document.querySelector('#player1').innerHTML = 'Player 1';
		document.querySelector('#player2').innerHTML = 'Player 2';
	}
};
