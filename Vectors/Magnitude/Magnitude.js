class Magnitude {
    constructor(x, y) {
        this.position = { x: canvas.w/2, y:canvas.h/2}
        this.mouse = { x: mouseX, y:mouseY}

    }


    #draw() {
        //mx mouseX my mouseY
        strokeWeight(7.5)
        line(
            this.position.x,
            this.position.y,
            mouseX,
            mouseY
        )
    }

    #drawMagnitudeBar() {
        fill(0)
        rect(15, 15, mag(
            this.mouse.x - this.position.x,
            this.mouse.y - this.position.y
        ),
        15)
    }

    mag(x,y) {
        return Math.sqrt(x*x + y*y);
    }

    update() {
        this.#draw();
        this.#drawMagnitudeBar();
        this.mouse.x = mouseX;
        this.mouse.y = mouseY;

    }
}