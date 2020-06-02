/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// 48강 첫 번째 DOM 액세스 및 조작
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector("#current-" + activePlayer).textContent = dice;

// innerHTML을 사용할 때는 String(문자열)이여야 한다.
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// var x = document.querySelector("#score-0").textContent;
// console.log(x);

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// 49강 : 이벤트 및 미벤트 처리 : 주사위 굴리기
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1. Random number
  dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";
  // .dice(주사위)를 random()에 맞춰서 이미지를 불러옴.

  // 3. Update the round score ( IF the rolled number was NOT a 1 )
  if (dice !== 1) {
    // Add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    // Next player
    nextPlayer();
  }
});

///////////////////////////////////////////
// btn-HOLD
document.querySelector(".btn-hold").addEventListener("click", function () {
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
  } else {
    // Next player
    nextPlayer();
  }
});

///////////////////////////////////////////
// next_Player
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0; // roundScore를 0으로 만든다.

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0"; // 출력되는 current를 0으로 만든다.

  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // active 상태로 전환하여 css 변경

  document.querySelector(".dice").style.display = "none";
  // activePlayer가 변경되면 dice 이미지를 숨김.
}
