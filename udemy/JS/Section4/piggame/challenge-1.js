/*
CHALLENGE 1

1.  한 선수가 6을 2 롤 굴리면 ENTIRE 점수를 잃습니다. 
    그 후, 다음 선수 차례입니다.
    (힌트 : 항상 이전 주사위 롤을 별도의 변수에 저장하십시오)

*/

var scores, roundScore, activePlayer, gamePlaying;
init();

var lastDice;

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update the round score ( IF the rolled number was NOT a 1 )
    if (dice === 6 && lastDice === 6) {
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = "0";
      nextPlayer();
    } else {
      // Add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    }
    lastDice = dice;
  }
});

///////////////////////////////////////////
// btn-HOLD
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add 'CURRNT score' to 'GLOBAL score'
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 10) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

///////////////////////////////////////////
// next_Player
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0; // roundScore를 0으로 만든다.

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0"; // 출력되는 current를 0으로 만든다.

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

///////////////////////////////////////////
// btn -NEW
document.querySelector(".btn-new").addEventListener("click", init);

///////////////////////////////////////////
// init
function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
