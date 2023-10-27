class Circle {
    x;
    y;
    radius;
    color;
    canvas;
    ctx;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }
    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius,0,2*Math.PI);
        this.ctx.stroke();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}