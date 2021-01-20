var GS=0;
var pc=0;
var form,player,game;
var database;
var allPlayers;
var cars,car1,car2,car3,car4;
var finishedPlayers=0;
var finish;
function preload(){
    track=loadImage("images/track.jpg");
    car1img=loadImage("images/car1.png");
    car2img=loadImage("images/car2.png");
    car3img=loadImage("images/car3.png");
    car4img=loadImage("images/car4.png");
    bronzeimg=loadImage("images/bronze.png");
    goldimg=loadImage("images/gold.png");
    silverimg=loadImage("images/silver.png");
}
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-100,displayHeight-220);
    game = new Game();
    game.getState();
    game.start();
   }

function draw(){
    background("white");
   if(pc===4&&finishedPlayers===0){
       game.updateGS(1)
   }
   if(GS===1){
       clear();
       game.play();
   }
   if(finishedPlayers===4){
       game.updateGS(2);
   }
   if(GS===2&&finishedPlayers===4){
      // game.end();
       game.displayRank();
   }

}

