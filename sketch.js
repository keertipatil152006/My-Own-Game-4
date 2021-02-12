var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, man1, man2, man3, man4;
var man1Img,man2Img, man3Img, man4Img,obstacleImg
var track,obstacles,obstaclesGroup

function preload(){
man1Img = loadAnimation("Images/player1.png","Images/player1flip.png") 
man2Img = loadAnimation("Images/player2.png","Images/player2flip.png") 
man3Img = loadAnimation("Images/player3.png","Images/player3flip.png") 
man4Img = loadAnimation("Images/player4.png","Images/player4flip.png")
track = loadImage("Images/track.jpg")
obstacleImg = loadImage("Images/obstacle.png")
}

function setup(){
  obstaclesGroup = createGroup();
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
  if(gameState === 2){
    game.end();
  }

}

