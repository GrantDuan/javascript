var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());

console.log(typeof(Clock));
console.log(Clock);

var c1 = new Clock(12,12);
var c2 = Clock(11, 11);

