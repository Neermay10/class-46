var name, girl, boy, girlImage, boyImage;
var healthPoints, healthImage, healthImage1, progressBar;
var cash, cashImage
var workProfile, dishWasher, delivery, clerk, policeOfficer, businessMan;
var foodProfile, junkFood, fruits, regularMeal, organicMeal;
var database;

function preload(){
    girlImage = loadImage("./image/girlImage.png");
    boyImage = loadImage("./image/boyImage.png");
    healthImage1 = loadImage("./image/healthImage.png");
    cashImage = loadImage("./image/cash.png");
    workProfile = loadImage("./image/workProfile.png");
    dishWasher = loadImage("./image/dishWasher.png");
    delivery = loadImage("./image/delivery.png");
    clerk = loadImage("./image/clerk.png");
    policeOfficer = loadImage("./image/policeOfficer.png");
    businessMan = loadImage("./image/businessMan.png");
    foodProfile = loadImage("./image/foodProfile.png");
    junkFood = loadImage("./image/junkFood.png");
    fruits = loadImage("./image/fruit.png");
    regularMeal = loadImage("./image/regularMeal.png");
    organicMeal = loadImage("./image/organicMeal.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();

    girl = createSprite(windowWidth/2-200,400);
    girl.addImage(girlImage);
    girl.scale = 0.2;
    boy = createSprite(windowWidth/2+200,400);
    boy.addImage(boyImage);
    boy.scale = 0.43;

    //text1= createElement('h1');
    //input = createInput('Name');
    button1 = createButton('Start');
    button1.mousePressed(gameOn);

    //text1.position(windowWidth/2-190,200);
    //text1.html("Enter Name & Select Gender");
    //var x = document.createElement("INPUT"); 
    //x.setAttribute("type", "radio");
    //input.position(windowWidth/2-75,600);
    button1.position(windowWidth/2-15,650);
}

function draw(){
    background(235);
    inputName=database.ref('Username')
    inputName.on('value',function(data){
        Username=data.val();
    })
    drawSprites();
    
}

function update(input){
    database.ref('/').update({
        Username:input
    });
}

function gameOn(){
    boy.visible = false;
    girl.visible = false;
    //text1.hide();
    //input.hide();
    button1.hide();
    //update();

    healthImage =createSprite(40,50);
    healthImage.addImage(healthImage1);
    healthImage.scale = 0.09;
    text()
}