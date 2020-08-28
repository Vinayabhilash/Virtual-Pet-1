var dog, dogImg, happyDog, database, foodS, foodStock;

function preload()
{
  dogImg = loadImage("Dog(1).png");
happyDog = loadImage("happydog(1).png");
}

function setup() {
  database = firebase.database();   
  createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  


background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
drawSprites();
fill("black");
text("Remaining Food: " + foodS, 200, 120);
textSize(20)
text("Note: Press UP_ARROW Key To Feed Drago Milk", 40, 20)
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
  x = 0;
  }else{
    x = x - 1;
  }
  database.ref('/').update({
    Food:x
  })
}



