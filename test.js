let input, button, greeting,apple;

function setup() {
  // create canvas
  createCanvas(100, 100);
	background(0);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  
  
  apple=createImg('images/apple.jpeg');
  apple.position(19,19);
  apple.mousePressed(changeBG);
  
  
  
  
}

function greet() {

  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

}
function changeBG() 
{
  var val = random(255);
background(val);}