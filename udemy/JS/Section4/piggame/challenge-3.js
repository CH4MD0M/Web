/*
CHALLENGE 3

3.  다른 주사위를 게임에 추가하여 두 개의 주사위를 만드십시오. 
    플레이어는 그들 중 하나가 1 일 때 현재 점수를 잃습니다. 
    
    (힌트 : 두 번째 주사위를 놓으려면 CSS가 필요하므로 
      첫 번째 주사위의 CSS 코드를 살펴보십시오.)

*/

// 48강 첫 번째 DOM 액세스 및 조작
var scores, roundScore, activePlayer, gamePlaying;

init(); // 변수 초기화 함수(DRY)

// 49강 : 이벤트 및 미벤트 처리 : 주사위 굴리기
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
    // .dice(주사위)를 random()에 맞춰서 이미지를 불러옴.

    // 3. Update the round score ( IF the rolled number was NOT a 1 )
    if (dice1 !== 1 && dice2 !== 1) {
      // Add score
      roundScore += dice1 + dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next player
      nextPlayer();
    }
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
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";

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

  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // active 상태로 전환하여 css 변경

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  // activePlayer가 변경되면 dice 이미지를 숨김.
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

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

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
