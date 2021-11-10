let side;
let sz;
let off =500;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(127, 127, 6);
  strokeWeight(1);
  angleMode(DEGREES);
  rectMode(CENTER)
  sz = height/12
  h = sz;
  frameRate(5)
}

function draw() {
  templeBlock(0,0);
  templeBlock(height/2,0);
  templeBlock(0,height/2);
  templeBlock(height/2,height/2);
  
  off+=0.1;
}


function templeBlock(x1,y1){
  if (h <= 2){  // the top of the temple
    h = sz; // the bottom of the temple
    
  }
  //let off1 = map(noise(off), 0, 1, 0.2, 2);
  let off1 = random(-3,7); // step length
  h -= off1;   // walking up the temple
  side = h;
  for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
      fill(255 - (x + y) * 50,255);
      stroke((x + y) * 40);
      push()
      translate(x * sz + side+x1,y * sz + side+y1)
      if (mouseIsPressed){
      rotate(frameCount)
      }
      rect( 0, 0, side, side);
      pop()
    }
  }
  
  
}

function keyPressed() {
  if (key === "s") {
    save("mysquares" + frameCount + ".jpg");
    print("saved")
  }
}
