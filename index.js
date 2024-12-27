'use strict';

const firstPlayer = document.querySelector('#firstPlayer');
const secondPlayer = document.querySelector('#secondPlayer');
const title = document.querySelector('h1');
let isClickableFirst = true;
let isClickableSecond = true;

const resultText = () => {
	if (firstPlayer.getAttribute("data-rnd") && secondPlayer.getAttribute("data-rnd")) {
		if (firstPlayer.getAttribute("data-rnd") > secondPlayer.getAttribute("data-rnd")) {
			title.textContent = "Player 1 Wins!";
		} else if (secondPlayer.getAttribute("data-rnd") > firstPlayer.getAttribute("data-rnd")) {
			title.textContent = "Player 2 Wins!";
		} else {
			title.textContent = "Friendship wins!";
		}

		setTimeout(() => {
			firstPlayer.setAttribute("data-rnd", '');
			firstPlayer.setAttribute("src", "./images/dice1.png");
			secondPlayer.setAttribute("data-rnd", '');
			secondPlayer.setAttribute("src", "./images/dice1.png");
			title.textContent = "Click your dice";
		}, 3000);
	}
};

const changeDice = (selector, num) => {
	selector.classList.remove("animate__fadeIn");
	selector.classList.add("animate__fadeOut");
	setTimeout(() => {
		selector.classList.add("hidden");
	}, 200);
	setTimeout(() => {
	selector.setAttribute("src", `./images/dice${num}.png`);
	selector.classList.remove("hidden", "animate__fadeOut");
	selector.classList.add("animate__fadeIn");
	}, 200)
};

const rndDice = (selector) => {
	let diceNum = Math.floor(Math.random() * 6) + 1;

	selector.setAttribute("data-rnd", `${diceNum}`);

	changeDice(selector, diceNum);
	resultText();
};

firstPlayer.addEventListener("click", () => {
	if (!isClickableFirst) return;
	rndDice(firstPlayer);

	isClickableFirst = false;

	setTimeout(() => {
		isClickableFirst = true;
	}, 3000);
});
secondPlayer.addEventListener("click", () => {
	if (!isClickableSecond) return;
	rndDice(secondPlayer);

	isClickableSecond = false;

	setTimeout(() => {
		isClickableSecond = true;
	}, 3000);
});