let bouncingBall;
let magnitude;
let normalizing;



//acc
let accelertion;
let throwButton;
let accSliderX;
let accSliderY;


let stages;

const canvas = {
  w:500,
  h:500,
}

const cellSize = canvas.w / 50

function setup() {
  createCanvas(canvas.w, canvas.h);
  stages = [];
  // bouncingBall = new BouncingBall(canvas.w/2,canvas.h/2, 25);
  // bouncingBall.addSpeed(0,5);
  // magnitude = new Magnitude();
  //  normalizing = new Normalizing();
  
  throwButton = createButton("Throw")
  throwButton.mousePressed(onMousePress)
  
  accelertion = new Acceleration(canvas.w/2,canvas.h/2 );



  fill(0);
  stages.push(
    accelertion
  )
  
}



function draw() {
  background(220);
  textAlign(LEFT);
  textSize(12);
  fill(0);

  
  updateStage();
}


function updateStage(){
  if(stages.length<=0) return;
  stages.forEach(stage => {
    stage.update();
  });
}

function onMousePress(){
  accelertion.throw();
}




