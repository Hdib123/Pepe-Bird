let WIDTH = 1000;
let HEIGHT = 600;
const GRAVITY = 0.2;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function preload() {
  backman = loadImage("./images/backmen.png");
  wall = loadImage("./images/wall.png");
  selectscreen = loadImage("./images/Screenshot_2.png");
  jump = loadSound("./sound/jump.mp3");
  hit = loadSound("./sound/hit.mp3");
  success = loadSound("./sound/success.mp3");
  music = loadSound("./sound/music.mp3");
  gif_loadImg = loadImage("./images/giuf.gif");
  gif_createImg = createImg("./images/giuf.gif");
}
