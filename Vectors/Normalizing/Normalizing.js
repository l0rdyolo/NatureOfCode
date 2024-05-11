class Normalizing {
    constructor() {
        this.position = { x: canvas.w / 2, y: canvas.h / 2 }
        this.mouse = { x: mouseX, y: mouseY }

        this.lineWeight = 7.5
    }


    #draw() {
        //mx mouseX my mouseY

        stroke(255 / 2)
        strokeWeight(this.lineWeight / 2)
        line(
            this.position.x,
            this.position.y,
            mouseX,
            mouseY
        )


    }

    #drawNormalizedVector() {
        let _sub = this.sub(this.mouse, this.position)
        let _normal = this.normalize(_sub);
        if (!_normal) return;

        stroke(0);
        // to center our normilazed vector, adding inital position to normalized position 
        line(
            this.position.x,
            this.position.y,
            this.position.x + _normal.x * 55,
            this.position.y + _normal.y * 55
        );


    }

    normalize(givenVector) {
        let _mag = this.mag(givenVector.x, givenVector.y)
        if (_mag <= 0) return;
        // unit vector = vector comp / vector mag
        const _normalX = givenVector.x / _mag
        const _normalY = givenVector.y / _mag

        return { x: _normalX, y: _normalY }


    }

    sub(v1, v2) {
        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y
        }
    }

    mag(x, y) {
        return Math.sqrt(x * x + y * y);
    }

    update() {
        this.#draw();
        this.#drawNormalizedVector();
        this.mouse.x = mouseX;
        this.mouse.y = mouseY;

    }
}