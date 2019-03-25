let input, button, greeting,apple;

function setup() {
  // create canvas
    canvas = createCanvas(window.displayWidth, window.displayHeight);

  //createCanvas(1024,768);
	canvas.background(205);
  input = createInput();
  input.position(500, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
  greeting = createElement('h2', 'what is your name?');
  greeting.position(500, 15);

  textAlign(CENTER);
  textSize(50);
  
  
  apple=createImg('images/apple.jpg');
  apple.size(100,100);
  apple.position(450,250);
  apple.mousePressed(changeBG);
  
  banana=createImg('images/banana.jpg');
  banana.size(100,100);
  banana.position(560,250);
  banana.mousePressed(changeBG);
  
  car=createImg('images/car.jpg');
  car.size(100,100);
  car.position(670,250);
  car.mousePressed(changeBG);
  
  duck=createImg('images/duck.jpg');
  duck.size(100,100);
  duck.position(780,250);
  duck.mousePressed(changeBG);
  
  //for second
  
  apple2=createImg('images/apple.jpg');
  apple2.size(100,100);
  apple2.position(450,400);
  apple2.mousePressed(changeBG);
  
  banana2=createImg('images/banana.jpg');
  banana2.size(100,100);
  banana2.position(560,400);
  banana2.mousePressed(changeBG);
  
  car2=createImg('images/car.jpg');
  car2.size(100,100);
  car2.position(670,400);
  car2.mousePressed(changeBG);
  
  duck2=createImg('images/duck.jpg');
  duck2.size(100,100);
  duck2.position(780,400);
  duck2	.mousePressed(changeBG);
  
 //for border 
  fill(0);
  rect(400,230, 550, 10);
  rect(400,510, 560, 10);
  rect(400,230, 10, 280);
  rect(950,230, 10, 280);



// rect.fill(50);
  // An ellipse
 
}

function greet() {

  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

}
function changeBG() 
{
	//text.size(200);
	text("Apple",100,50);
  //var val = random(255);
//background(val);

}

