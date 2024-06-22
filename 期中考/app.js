document.addEventListener("DOMContentLoaded", () => {
  const holes = document.querySelectorAll(".hole");
  const scoreDisplay = document.getElementById("score");
  const highScoreDisplay = document.getElementById("high-score");
  const timeLeftDisplay = document.getElementById("time-left");
  const startButton = document.getElementById("start-button");
  const pauseButton = document.getElementById("pause-button");
  const resumeButton = document.getElementById("resume-button");
  const difficultySelect = document.getElementById("difficulty");
  const hitSound = document.getElementById("hit-sound");
  let score = 0;
  let highScore = 0;
  let timeLeft = 30;
  let timerId;
  let moleTimerId;
  let gamePaused = false;
  let moleCount = 1;
  let specialMoleChance = 0.1;
  let penaltyMoleChance = 0.05;

  function getMoleInterval() {
    switch (difficultySelect.value) {
      case "easy":
        return 1000;
      case "medium":
        return 600;
      case "hard":
        return 400;
      default:
        return 1000;
    }
  }

  function randomHole() {
    holes.forEach((hole) =>
      hole.classList.remove("active", "special", "penalty")
    );
    for (let i = 0; i < moleCount; i++) {
      const randomIndex = Math.floor(Math.random() * holes.length);
      const moleType = Math.random();
      if (moleType < penaltyMoleChance) {
        holes[randomIndex].classList.add("penalty");
      } else if (moleType < specialMoleChance + penaltyMoleChance) {
        holes[randomIndex].classList.add("special");
      } else {
        holes[randomIndex].classList.add("active");
      }
    }
  }

  function startGame() {
    score = 0;
    timeLeft = 30;
    gamePaused = false;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
    startButton.disabled = true;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    timerId = setInterval(countdown, 1000);
    moleTimerId = setInterval(randomHole, getMoleInterval());
  }

  function countdown() {
    if (!gamePaused) {
      timeLeft--;
      timeLeftDisplay.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timerId);
        clearInterval(moleTimerId);
        startButton.disabled = false;
        pauseButton.disabled = true;
        resumeButton.disabled = true;
        if (score > highScore) {
          highScore = score;
          highScoreDisplay.textContent = highScore;
        }
        alert("Game Over! Your score is " + score);
      }
    }
  }

  holes.forEach((hole) => {
    hole.addEventListener("click", () => {
      if (hole.classList.contains("active")) {
        score++;
        scoreDisplay.textContent = score;
        hole.classList.remove("active");
        hitSound.play();
      } else if (hole.classList.contains("special")) {
        score += 5;
        scoreDisplay.textContent = score;
        hole.classList.remove("special");
        hitSound.play();
      } else if (hole.classList.contains("penalty")) {
        score -= 3;
        scoreDisplay.textContent = score;
        hole.classList.remove("penalty");
        hitSound.play();
      }
    });
  });

  startButton.addEventListener("click", startGame);

  pauseButton.addEventListener("click", () => {
    gamePaused = true;
    pauseButton.disabled = true;
    resumeButton.disabled = false;
  });

  resumeButton.addEventListener("click", () => {
    gamePaused = false;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
  });
});
