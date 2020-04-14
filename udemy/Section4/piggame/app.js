/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;
init();

// addEventListener("Event 유형", " 호출될 함수( '()'를 쓰지 않음 : callback 함수 )")
//                              , " 함수를 작성할 수도 있음( but, 재사용 X )"
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. 숫자가 1이 아닐때 round score를 update
    if (dice !== 1) {
      // 점수를 추가
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 다음 플레이어로 차례를 넘김
      nextPlayer();
    }
  }
});

// hold 버튼 eventlistner
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // CURRENT score를 GLOBAL score에 저장
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // player가 게임에서 이겼는지 check
    if (scores[activePlayer] >= 10) {
      // score가 100점을 넘기면 Winner라고 display
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      // js로 css를 계속 변경하는 것은 좋지 못함.
      // css에 가상의 클래스로 style을 추가하고
      // html에서 active 클래스를 css의 가상클래스 이름으로 add(), remove() 하는 것이 좋음.
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // 다음 플레이어로 차례를 넘김
      nextPlayer();
    }
  }
});

// function 사용의 반복을 방지하기 위해
// 상대차례로 넘기는 것을 함수화.
function nextPlayer() {
  // 다음 플레이어로 차례를 넘김
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // active 상태를 지움.
  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  // toggle : 전환
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // 상대 차례 시작에 주사위 display : none
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

// 변수 초기화 함수
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  // CSS 수정 가능
  document.querySelector(".dice").style.display = "none";

  // getElementById가 querySelector보다 빠름.
  // id에 대해서만 사용 가능.
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("name-0").textContent = "Player1";
  document.getElementById("name-1").textContent = "Player2";
  // active, winner 클래스를 remove한 뒤,
  // player-0를 active 클래스로 add
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
