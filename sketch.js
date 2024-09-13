function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    stroke("white");
    fill("white");
  
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) rect(mouseX, mouseY, 15, 20);
  }
  