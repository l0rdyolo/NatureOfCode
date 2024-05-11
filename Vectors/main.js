let bouncingBall;
let magnitude;
let normalizing;
let stages;

const canvas = {
  w:500,
  h:500,
  cellSize: this.w/25
}



function setup() {
  createCanvas(canvas.w, canvas.h);
  stages = [];
  // bouncingBall = new BouncingBall(canvas.w/2,canvas.h/2, 25);
  // bouncingBall.addSpeed(0,5);
  // magnitude = new Magnitude();
     normalizing = new Normalizing();


  stages.push(
    normalizing
  )
  
}



function draw() {
  background(220);
  
  updateStage();
}


function updateStage(){
  if(stages.length<=0) return;
  stages.forEach(stage => {
    stage.update();
  });
}