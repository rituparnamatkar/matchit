var img,img2,img3,img4,imgg,imgg2,imgg3,imgg4; //declaring variable for images
let apple=false;   // setting boolean value as false for all the images
let apple2=false;
let banana=false;
let banana2=false;
let car=false;
let car2=false;
let duck=false;
let duck2=false;
var song;
let input, button, greeting;

function preload()
{
			song = loadSound("unconvinced.mp3");
			 

}


function setup() 
{
	
	var ib=select('#ibut');
	ib.size(100,50);
	ib.position(50,50);
	ib.mousePressed(testbtn);
	
	
	img = loadImage('/matchit/images/apple.jpg'); //loading images from the specified folder and assigning it to variables. 
		 img2 = loadImage('/matchit/images/banana.jpg');
		 img3 = loadImage('/matchit/images/car.jpg');
		 img4 = loadImage('/matchit/images/duck.jpg'); 
		 
		 imgg = loadImage('/matchit/images/apple.jpg');
		 imgg2 = loadImage('/matchit/images/banana.jpg');
		 imgg3 = loadImage('/matchit/images/car.jpg');
		 imgg4 = loadImage('/matchit/images/duck.jpg'); 
	
	
	
	createCanvas(windowWidth, windowHeight); //setting canvas size as  same as the size of window
	//createCanvas(710,400);
	//background(155);//setting background color
	noStroke();
	fill(0);


		
		 
		 
		 input = createInput();
		input.position(50, 450);

  button = createButton('submit');
  button.position(input.x + input.width, 450);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(50,400);

  textAlign(CENTER);
  textSize(10);
}

function draw() {
	 image(img, 600, 200,height="100",width="100");       //loading image and setting height & width
	 image(img2, 600,300,height="100",width="100");
	 image(img3, 600, 400,height="100",width="100");
	 image(img4, 600, 500,height="100",width="100");

	 image(imgg4,800, 200,height="100",width="100");
	 image(imgg,800, 300,height="100",width="100");
	 image(imgg2,800, 400,height="100",width="100");
	 image(imgg3,800, 500,height="100",width="100");
	frameRate(12);                                    //these 3 lines helps to know the location cordinates on the screen.
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY,0 , height/2);
		
	 
}

function mouseClicked()                       //function that gets triggered on mouseClicked.
{
		if (mouseX<200 && mouseY<600) //condition for cordinated of image
		{	
			apple=true;				
			text("Apple",70,30);
			checkingApple();
		}
		else if(mouseX>100 && mouseX<150 && mouseY>50 && mouseY<100)
		{
				checkingApple();
			apple2=true;
			text("Apple2",170,80);
			
		}
		else if(mouseX<50 && mouseY>50 && mouseY<100)
		{	
			checkingBanana();
			banana=true;
			text("banana",70,80);
		}
		else if(mouseX>100 && mouseX<150 && mouseY>100 && mouseY<150)
		{	
		checkingBanana();
		banana2=true;
		text("banana2",170,130);
		}
		else if(mouseX >100  && mouseY>150 && mouseY<200)
		{
		checkingCar();
		car2=true;
		text("Car2",170,180);
		}
		else if(mouseX >100  && mouseY>0 && mouseY<50)
		{
		checkDuck();	
		duck2=true;
		text("Duck2",170,30);
		}
		else if(mouseX <50  && mouseY>100 && mouseY<150)
		{
		checkingCar();
		car=true;
		text("Car",70,130);
		}
		else if(mouseX >0 && mouseY>150 && mouseY<200)
		{
	checkDuck();
		duck=true;
		text("duck",70,180);
		}	
}

//these 4 functions compares the selected Images and displays the text message as matched or not

function checkingApple()
{
		if(apple==true && apple2==true) {
		text("Apple Matched",50,255);
		song.play();
		}
}
function checkingBanana()		
{		if(banana==true && banana2==true) {
		text("banana matched",50,275);
		song.play();
		}
}
function checkingCar()		
{		if(car==true && car2==true) {
		text("Car matched",50,295);
		song.play();
		}
}

function checkDuck()		
{		if(duck==true && duck2==true) {
		text("Duck matched",50,315);
		song.play();
		}
}


/*/////////////////////////////////////////////////////////////*/

function testbtn()
{
		background(200);
}
function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
	let cd=translate(0,255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}


