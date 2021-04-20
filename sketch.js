/* man:sprite-animation 
rocks : ground.js-array-colour
ores : bird.js - array- colour
mining device- slingshot.js
score:
 */


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var PLAY = 1;
var END = 0;
var gameState= PLAY;

var blueOreImg,blueStoneImg,greenOreImg,greenStoneImg,goldOreImg;
var goldStoneImg,redOreImg,redStoneImg,yellowOreImg,yellowStoneImg;
var bgImage,body,redStone,blueStone,greenStone,goldStone,yellowStone;
var score = 0;
var redArray,blueArray,greenArray,goldArray,yellowArray;

function preload() {
  
  redStoneImg = loadImage("REDstone.png");
  blueStoneImg = loadImage("BLUEstone.png");
  greenStoneImg = loadImage("GREENstone.png");
  goldStoneImg = loadImage("GOLDstone.png");
  yellowStoneImg = loadImage("YELLOWstone.png");

  bgImage = loadImage("BACKGROUND.png");
}

function setup(){
    var canvas = createCanvas(350,900);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    redStone = createSprite(1100,150);
    redStone.addImage("redStone",redStoneImg);

    blueStone = createSprite(1100,150);
    blueStone.addImage("blueStone",blueStoneImg);

    greenStone = createSprite(1100,150);
    greenStone.addImage("greenStone",greenStoneImg);

    goldStone = createSprite(1100,150);
    goldStone.addImage("goldStone",goldStoneImg);

    yellowStone = createSprite(1100,150);
    yellowStone.addImage("yellowStone",yellowStoneImg);

    blueOre1= new blueOre(100,0);
    blueOre2= new blueOre(250,0);
    blueOre3= new blueOre(0,50);
    blueOre4= new blueOre(100,50);
    blueOre5= new blueOre(200,50);
    blueOre6= new blueOre(100,100);
    blueOre7= new blueOre(300,100);
    blueOre8= new blueOre(100,150);
    blueOre9= new blueOre(250,150);
    blueOre10= new blueOre(150,200);
    blueOre11= new blueOre(0,250);
    blueOre12= new blueOre(50,300);
    blueOre13= new blueOre(300,300);
    blueOre14= new blueOre(150,350);
    blueOre15= new blueOre(50,400);

    redOre1= new redOre(150,0);
    redOre2= new redOre(50,50);
    redOre3= new redOre(300,50);
    redOre4= new redOre(250,100);
    redOre5= new redOre(50,150);
    redOre6= new redOre(150,150);
    redOre7= new redOre(0,200);
    redOre8= new redOre(100,200);
    redOre9= new redOre(200,200);
    redOre10= new redOre(300,200);
    redOre11= new redOre(150,250);
    redOre12= new redOre(200,300);
    redOre13= new redOre(0,350);
    redOre14= new redOre(250,350);
    redOre15= new redOre(100,400);

    greenOre1= new greenOre(50,0);
    greenOre2= new greenOre(150,50);
    greenOre3= new greenOre(0,100);
    greenOre4= new greenOre(200,100);
    greenOre5= new greenOre(0,150);
    greenOre6= new greenOre(100,150);
    greenOre7= new greenOre(250,200);
    greenOre8= new greenOre(50,250);
    greenOre9= new greenOre(300,250);
    greenOre10= new greenOre(100,300);
    greenOre11= new greenOre(150,300);
    greenOre12= new greenOre(250,300);
    greenOre13= new greenOre(300,350);
    greenOre14= new greenOre(150,400);
    greenOre15= new greenOre(250,400);

    yellowOre1= new yellowOre(0,0);
    yellowOre2= new yellowOre(200,0);
    yellowOre16 = new yellowOre(300,0);
    yellowOre3= new yellowOre(250,50);
    yellowOre4= new yellowOre(50,100);
    yellowOre5= new yellowOre(200,150);
    yellowOre6= new yellowOre(300,150);
    yellowOre7= new yellowOre(50,200);
    yellowOre8= new yellowOre(100,250);
    yellowOre9= new yellowOre(200,250);
    yellowOre10= new yellowOre(0,300);
    yellowOre11= new yellowOre(100,350);
    yellowOre12= new yellowOre(200,350);
    yellowOre13= new yellowOre(0,400);
    yellowOre14= new yellowOre(200,400);
    yellowOre15= new yellowOre(300,400);

    goldOre1= new goldOre(150,100);
    goldOre2= new goldOre(250,250);
    goldOre3= new goldOre(50,350);

    redArray=[redOre1,redOre2,redOre3,redOre4,redOre5,redOre6,redOre7,redOre8,redOre9,
        redOre10,redOre11,redOre12,redOre13,redOre14,redOre15];
      
    blueArray=[blueOre1,blueOre2,blueOre3,blueOre4,blueOre5,blueOre6,blueOre7,blueOre8,
        blueOre9,blueOre10,blueOre11,blueOre12,blueOre13,blueOre14,blueOre15];

    greenArray=[greenOre1,greenOre2,greenOre3,greenOre3,greenOre4,greenOre5,greenOre6,greenOre7,
        greenOre8,greenOre9,greenOre10,greenOre11,greenOre12,greenOre13,greenOre14,greenOre15]; 
        
    goldArray=[goldOre1,goldOre2,goldOre3];

    yellowArray=[yellowOre1,yellowOre2,yellowOre3,yellowOre4,yellowOre5,yellowOre6,yellowOre7,yellowOre8,
        yellowOre9,yellowOre10,yellowOre11,yellowOre12,yellowOre13,yellowOre14,yellowOre15];

     slingshot = new SlingShot(sling(),{x:200, y:50});
}

function draw(){
    if(bgImage){
        background(bgImage);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-30, 50);

    Engine.update(engine);

        blueOre1.display();
        blueOre2.display();
        blueOre3.display();
        blueOre4.display();
        blueOre5.display();
        blueOre6.display();
        blueOre7.display();
        blueOre8.display();
        blueOre9.display();
        blueOre10.display();
        blueOre11.display();
        blueOre12.display();
        blueOre13.display();
        blueOre14.display();
        blueOre15.display();

        greenOre1.display();
        greenOre2.display();
        greenOre3.display();
        greenOre4.display();
        greenOre5.display();
        greenOre6.display();
        greenOre7.display();
        greenOre8.display();
        greenOre9.display();
        greenOre10.display();
        greenOre11.display();
        greenOre12.display();
        greenOre13.display();
        greenOre14.display();
        greenOre15.display();

        redOre1.display();
        redOre2.display();
        redOre3.display();
        redOre4.display();
        redOre5.display();
        redOre6.display();
        redOre7.display();
        redOre8.display();
        redOre9.display();
        redOre10.display();
        redOre11.display();
        redOre12.display();
        redOre13.display();
        redOre14.display();
        redOre15.display();

        yellowOre1.display();
        yellowOre2.display();
        yellowOre3.display();
        yellowOre4.display();
        yellowOre5.display();
        yellowOre6.display();
        yellowOre7.display();
        yellowOre8.display();
        yellowOre9.display();
        yellowOre10.display();
        yellowOre11.display();
        yellowOre12.display();
        yellowOre13.display();
        yellowOre14.display();
        yellowOre15.display();
        yellowOre16.display();

        goldOre1.display();
        goldOre2.display();
        goldOre3.display();
        
        for(var i in redArray){
            if(redStone.isTouching(redArray[i])){
                score++;
            }
        }

        for(var i in blueArray){
            if(blueStone.isTouching(blueArray[i])){
                score++;
            }
        }

        for(var i in greenArray){
            if(greenStone.isTouching(greenArray[i])){
                score++;
            }
        }

        for(var i in goldArray){
            if(goldStone.isTouching(goldArray[i])){
                score++;
            }
        }

        for(var i in yellowArray){
            if(yellowStone.isTouching(yellowArray[i])){
                score++;
            }
        }
    

    }

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

function sling(){
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: body = redStone;
              break;
      case 2: body = greenStone;
              break;
      case 3: body = blueStone;
              break;
      case 4: body = yellowStone;
              break;
      case 5: body = goldStone;
              break;
      default: break;
    }
    return body
}
/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/
}
