function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];
    const po = Math.pow(P, 2);
    const sq = Math.sqrt
    var answers = [];
    var s1 = (P + sq(po - 16 * A)) / 4;
    var s2 = (P - sq(po - 16 * A)) / 4;
    answers.push(s1);
    answers.push(s2);

    function so(a, b) {
        return a - b;
    }
    let final = answers.sort(so)
    return final
}