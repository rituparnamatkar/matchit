function preLoad()
{
var apple = loadImage('/matchit/images/banana.jpg');


}
	
function setup()
{
	  createCanvas(400, 200);
background(0);
	var apple=select(apple);
	var banana=select(banana);

	//apple.size(10,100);
	apple.position(50,0);
	apple.mousePressed(testbtn);
	banana.position(250,50);
	banana.mousePressed(testbtn);
	
}
		

function testbtn()
{
		 fill(255,255,255);

		//background('aqua');
}
