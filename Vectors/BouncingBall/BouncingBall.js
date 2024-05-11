// x: xPosition y: yPosition r:Radius
class BouncingBall{
    #radius;
    constructor(x,y,d){
        this.position = {x:x,y:y}
        this.speed = {x:0,y:0}
        this.diameter = d
        this.#radius = this.diameter / 2;

        this.direction = {x:1,y:1};
    }

    #checkCollision(){
        if(
            this.position.x > canvas.w - this.#radius/2 ||
            this.position.x - this.#radius/2 < 0
        ){
            this.direction.x *= -1
        }        


        if(
            this.position.y > canvas.h - this.#radius/2||
            this.position.y < 0
        ){
            this.direction.y *= -1
        }

    }   

    #draw(){
        stroke(0);
        fill(127);
        circle(
            this.position.x,
            this.position.y,
            this.diameter
        )
    }

    addSpeed(_x,_y){
        this.speed.x = this.speed.x + _x;
        this.speed.y = this.speed.y + _y;         
    }

    update(){
        this.#draw();
        this.#checkCollision();
        this.position.x = this.position.x + this.speed.x * this.direction.x;
        this.position.y = this.position.y + this.speed.y * this.direction.y;
    }
}