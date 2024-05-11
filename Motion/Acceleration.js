class Acceleration{
    #radius
    #topSpeed
    #accelerationDirection
    #_velMag;
    #_clr;

    constructor(){
        this.position = {x: random(canvas.w), y: random(canvas.h)};
        // this.velocity = {x: random(-10,10), y: random(-10,10)};
        this.velocity = {x: 10, y: 10};
        this.acceleration = {x:-0.09 , y: -0.09};
        this.direction = {x: 1, y: 1};
        this.diameter = 15;
        this.#radius = this.diameter/2;
        this.#topSpeed = 29;


        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topspeed = 5;
        //temp variables
        this.#_velMag;
        this.#_clr;

    }


    #draw(){
        stroke(0);
        fill(127);
        circle(
            this.position.x,
            this.position.y,
            this.diameter
        )

        textSize(32);

    }




    

    update(){
        this.#draw();

        let mouse = createVector(mouseX, mouseY);
        // Step 1: Compute direction
        let dir = p5.Vector.sub(mouse, this.position);
    
        // Step 2: Normalize
        dir.normalize();
    
        // Step 3: Scale
        dir.mult(0.8);
        
        // Steps 2 and 3 could be combined into:
        // dir.setMag(0.2);
    
        // Step 4: Accelerate
        this.acceleration = dir;
    
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
           
    }
}