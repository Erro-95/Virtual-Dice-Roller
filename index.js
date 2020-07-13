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

	document.querySelector('.dice1').setAttribute('src', diceImgs[Math.floor(Math.random() * diceImgs.length)]);
	document.querySelector('.dice2').setAttribute('src', diceImgs[Math.floor(Math.random() * diceImgs.length)]);
};
