"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
};

const checkButton = document
    .querySelector(".check")
    .addEventListener("click", function () {
        const guess = Number(document.querySelector(".guess").value);

        if (!guess) {
            displayMessage("⛔ Please insert a number!");
        } else if (guess > 20) {
            displayMessage("Number has to be between 1 and 20!");
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = secretNumber;
            displayMessage("Number is correct!");
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "20rem";
            if (score > highscore) {
                highscore = score;
                document.querySelector(".highscore").textContent = highscore;
            }
        } else if (guess !== secretNumber) {
            document.querySelector(".message").textContent =
                guess > secretNumber ? "Too high!" : "Too low!";
            document.querySelector(".score").textContent = score -= 1;
        }

        if (score === 0) {
            document.querySelector(".message").textContent = "Game Over!";
        }
    });

const again = document
    .querySelector(".again")
    .addEventListener("click", function () {
        const guess = Number(document.querySelector(".guess").value);

        score = document.querySelector(".score").textContent = 20;
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").textContent = "?";
        displayMessage("Start guessing...");
        const background = (document.querySelector(
            "body"
        ).style.backgroundColor = "#222");
        guess = document.querySelector(".guess").value = "";
    });
