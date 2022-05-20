class Polygon {
    constructor(s) {
        const init = 0
        this.peri = s.reduce((a, c) => a + c, init);
    }
    perimeter() {
        return this.peri;
    }
}