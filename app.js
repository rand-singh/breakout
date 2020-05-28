const rulesBtn = document.getElementById("rules-btn"),
  closeBtn = document.getElementById("close-btn"),
  rules = document.getElementById("rules"),
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

let score = 0;

// Create ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};

// Draw ball on the canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = "#0095dd";
  ctx.fill();

  ctx.closePath();
}

// Draw game items
function draw() {
  drawBall();
  drawPaddle();
  drawScore();
}

// Draw score on canvas
function drawScore() {
  (ctx.font = "20px Arial"),
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 35);
}

draw();

// Rules and close event handlers
rulesBtn.addEventListener("click", () => rules.classList.add("show"));
closeBtn.addEventListener("click", () => rules.classList.remove("show"));
