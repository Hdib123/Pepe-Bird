var bird;
var pipes = [];
var score = 0;
let highScore = 0;
var mode;
let bg;
let y = 0;
let hit;
let success;
let jump;
var gif_loadImg, gif_createImg;

function setup() {
  mode = 0;
  bg = loadImage("./images/Screenshot_2.png");
  bgGame = loadImage("./images/game background.jpg");
  createCanvas(1000, 600);
  bird = new Bird(500, 400);
  pipes.push(new Pipe());
  // Playing the preloaded sound
  music.play();
  //creating sound rocker
  slider = createSlider(0, 1, 0.1, 0.1);
}

function draw() {
  music.setVolume(slider.value());
  clear();
  image(gif_loadImg, 250, 250);
  gif_createImg.position(1020, 200);
  if (mode == 0) {
    background(bg);
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("pause").style.display = "none";
    document.getElementById("menu").style.display = "none";
    //TODO:
    //set startBtn to display = block
  }

  if (mode == 1) {
    //set startBtn to display = block
    background(bgGame);
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("pause").style.display = "block";
    document.getElementById("menu").style.display = "block";

    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].between(bird)) {
        success.play();
        console.log("good one");
        score += 1;
        document.getElementById("score").innerHTML = "Skor: " + score;
        if (score >= highScore) {
          console.log("SCOOOORE: ", score);
          console.log("420SCORE: ", highScore);

          highScore = score;
          document.getElementById(
            "highscore"
          ).innerHTML = `Hight Skor: ${highScore}`;
          console.log(score);
        }
      }

      if (pipes[i].hits(bird)) {
        hit.play();
        console.log("HIT");
        // highScore = score;
        document.getElementById("score").innerHTML = "Score: " + score;
        score = 0;
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.draw();

    if (frameCount % 90 == 0) {
      pipes.push(new Pipe());
    }
  }
}

function keyPressed() {
  if (key == " ") {
    bird.jump();
    console.log("SPACE");
  }
  if (keyCode === ENTER) {
    mode = 1;
  }
}
document.getElementById("start-btn").addEventListener("click", function () {
  mode = 1;
});

document.getElementById("menu").addEventListener("click", function () {
  mode = 0;
});

document.getElementById("pause").addEventListener("click", function () {
  noLoop();

  document.getElementById("play").style.display = "block";
  document.getElementById("play").addEventListener("click", function () {
    loop();
    document.getElementById("play").style.display = "none";
  });
});
