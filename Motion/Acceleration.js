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
        this.acceleration = {x:0.09 , y: 0.09};
        this.direction = {x: 1, y: 1};
        this.diameter = 15;
        this.#radius = this.diameter/2;
        this.#topSpeed = 29;
        this.#accelerationDirection = 1;
        


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
        
        noStroke();
        fill(155)
        let _t = mag(this.acceleration.x,this.acceleration.y) * this.#accelerationDirection
        text(`acc : ${_t.toFixed(2)}`  ,cellSize * this.diameter , canvas.h -  this.#radius)

        //calculate velocity magnetide

        this.#_velMag = this.mag(this.velocity.x , this.velocity.y)
        this.#_clr = this.#_velMag < this.#topSpeed ? 155 : [255 , 0 , 0]
        
        fill(this.#_clr)
        text(`vel : ${this.#_velMag.toFixed()}`  , cellSize , canvas.h -  this.#radius)

        
    }

    #checkCollision(){
        if(
            this.position.x > canvas.w - this.#radius ||
            this.position.x - this.#radius < 0
        ){
            this.direction.x *= -1
        }        


        if(
            this.position.y > canvas.h - this.#radius||
            this.position.y - this.#radius < 0
        ){
            this.direction.y *= -1
        }

    }

    mag(x,y) {
        return Math.sqrt(x*x + y*y);
    }   

    throw(){
        //reset position

        //reset velocity
        if(this.mag(this.velocity.x,this.velocity.y) > 0) return;
        this.#accelerationDirection *= -1;





    }

    update(){
        this.#draw();
        this.#checkCollision();
        
        this.position.x = this.position.x + this.velocity.x * this.direction.x
        this.position.y = this.position.y + this.velocity.y * this.direction.y

        this.velocity.x = this.velocity.x - this.acceleration.x * this.#accelerationDirection;  
        this.velocity.y = this.velocity.y - this.acceleration.y * this.#accelerationDirection;  

        if(this.velocity.x < 0) this.velocity.x = 0;
        if(this.velocity.y < 0) this.velocity.y = 0;

        if(mag(this.velocity.x,this.velocity.y)  >= this.#topSpeed + 5) this.#accelerationDirection = 1;

    }
}