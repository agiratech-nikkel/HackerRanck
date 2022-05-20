class Polygon {
    constructor(lengths) {
        this.values = lengths;
    }
    perimeter() {
        return (this.values).reduce((a, b) => a + b);
    }
}