var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4, cars;

function preload()
 {
   //SpaceShips
   ship1=loadImage("tile000.png");
   ship2=loadImage("tile001.png");
   ship3=loadImage("tile002.png");
   ship4=loadImage("tile003.png");

   BG1 = loadImage("space-1.png");
   BG2 = loadImage("space2.png");
 }
function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-70);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
