function Shape(x, y){
    this.x = x;
    this.y = y;
}

Shape.prototype.move = function(x, y){
    this.x += x;
    this.y += y;
}

function Circle(x, y, r){
    Shape.call(this, x, y);
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constractor = Circle;

Circle.prototype.circumference = function (){
    return this.r * 2 * Math.PI;
}



