//Create variables here
var  database;
var dog, happyDog;
var foodS, foodStock;
var dogImage, dogImage1;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(250,250,100,100);
  dog.addImage(dogImage);
  dog.scale=1.5;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
     dog.addImage(dogImage1);
     writeStock(foodS);
  }

  drawSprites();
  //add styles here

  textSize(20)
  text("PRESS 'UP ARROW' TO FEED DRAGO MILK !",150,15,200,20);

}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })3
}


