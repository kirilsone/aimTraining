let $start = document.querySelector('#start');
let $game = document.querySelector('#game');

$start.addEventListener('click', startGame)

function startGame() {
	$game.style.backgroundColor = 'grey';
	$start.classList.add('hide')

	renderBox()
}

function renderBox() {

}