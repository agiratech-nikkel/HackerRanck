class Polygon {
    constructor(s) {
        this.peri = s.reduce((a, c) => a + c);
    }
    perimeter() {
        return this.peri;
    }
}