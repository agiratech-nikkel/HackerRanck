function vowelsAndConsonants(s) {
    const v = 'aeiou';
    var c = '';
    for (var i = 0; i < s.length; i++) {
        if (v.indexOf(s[i]) > -1) {
            console.log(s[i]);
        } else {
            c += s[i] + '\n';
        }
    }
    console.log(c);
}