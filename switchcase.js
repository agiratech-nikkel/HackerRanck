function getLetter(s) {
    let letter;
    // Write your code here
    var i = 0;
    switch (s[i]) {
        case ('a' || 'e' || 'o' || 'i' || 'u'):
            letter = 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;
        case ('n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z'):
            letter = 'D';
    }
    return letter;
}