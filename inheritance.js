Rectangle.prototype.area = function() {
        return this.w * this.h;
    }
    /*
     * Create a Square class that inherits from Rectangle and implement its class constructor
     */
class Square extends Rectangle {
    constructor(given) {
        super(given);
        this.w = given;
        this.h = given;
    }
}