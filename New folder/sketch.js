var img,img2,img3,img4,imgg,imgg2,imgg3,imgg4,congo; //declaring variable for images
let apple=false;   // setting boolean value as false for all the images
let apple2=false;
let banana=false;
let banana2=false;
let car=false;
let car2=false;
let duck=false;
let duck2=false;
let  a=false;
let b=false;
let c=false;
let d=false;
var song;
var song2;

function preload()
{
		song = loadSound("unconvinced.mp3");
		song2 = loadSound("applauses.mp3");

}
function setup() 
{
	
	createCanvas(windowWidth, windowHeight); //setting canvas size as  same as the size of window
	background(155);//setting background color
	noStroke();
	fill(0);

			congo = loadImage('congo.gif'); 
		 img = loadImage('apple.jpg'); //loading images from the specified folder and assigning it to variables. 
		 img2 = loadImage('banana.jpg');
		 img3 = loadImage('car.jpg');
		 img4 = loadImage('duck.jpg'); 
		 
		 imgg = loadImage('apple.jpg');
		 imgg2 = loadImage('banana.jpg');
		 imgg3 = loadImage('car.jpg');
		 imgg4 = loadImage('duck.jpg'); 
}

function draw() {
	 image(img, 0, 0,height="50",width="50");       //loading image and setting height & width
	 image(img2, 0,50,height="50",width="50");
	 image(img3, 0, 100,height="50",width="50");
	 image(img4, 0, 150,height="50",width="50");

	 image(imgg4, 100, 0,height="50",width="50");
	 image(imgg, 100, 50,height="50",width="50");
	 image(imgg2, 100, 100,height="50",width="50");
	 image(imgg3, 100, 150,height="50",width="50");
	frameRate(12);                                    //these 3 lines helps to know the location cordinates on the screen.
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY,0 , height/2);
		
	 
}

function mouseClicked()                       //function that gets triggered on mouseClicked.
{
		if (mouseX<50 && mouseY<50) //condition for cordinated of image
		{	
			apple=true;				
			text("Apple",50,30);
			checkingApple();
		}
		else if(mouseX>100 && mouseX<150 && mouseY>50 && mouseY<100)
		{
				checkingApple();
			apple2=true;
			text("Apple2",150,80);
			
		}
		else if(mouseX<50 && mouseY>50 && mouseY<100)
		{	
			checkingBanana();
			banana=true;
			text("banana",50,80);
		}
		else if(mouseX>100 && mouseX<150 && mouseY>100 && mouseY<150)
		{	
		checkingBanana();
		banana2=true;
		text("banana2",150,130);
		}
		else if(mouseX >100  && mouseY>150 && mouseY<200)
		{
		checkingCar();
		car2=true;
		text("Car2",150,180);
		}
		else if(mouseX >100  && mouseY>0 && mouseY<50)
		{
		checkDuck();	
		duck2=true;
		text("Duck2",150,30);
		}
		else if(mouseX <50  && mouseY>100 && mouseY<150)
		{
		checkingCar();
		car=true;
		text("Car",50,130);
		}
		else if(mouseX >0 && mouseY>150 && mouseY<200)
		{
	checkDuck();
		duck=true;
		text("duck",50,180);
		}	
}

//these 4 functions compares the selected Images and displays the text message as matched or not

function checkingApple()
{
		if(apple==true && apple2==true) {
		text("Apple Matched",5,255);
				song.play();
				a=true;
				play();
		}
		
}
function checkingBanana()		
{		if(banana==true && banana2==true) {
		text("banana matched",5,275);
			song.play();
			b=true;
			play();

		}
}
function checkingCar()		
{		if(car==true && car2==true) {
		text("Car matched",5,295);
		c=true;
		song.play();
		play();
		}
}

function checkDuck()		
{		if(duck==true && duck2==true) {
		text("Duck matched",5,315);
		d=true;
				song.play();
				play();

		}
}
function play()
{
	if(a==true && b==true && c==true && d==true )
	{
			song2.play();
			 image(congo, 480, 220,height="250",width="250");
	}
}


