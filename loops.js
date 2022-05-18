function vowelsAndConsonants(s) {
    let c, d;
    for (let i = 0; i <= s.length - 1; i++) {
        c = s[i];
        if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
            console.log(c)
        }
    }
    for (let i = 0; i <= s.length - 1; i++) {
        d = s[i];
        if (d == "a" || d == "e" || d == "i" || d == "o" || d == "u") {} else {
            console.log(d)
        }
    }
}