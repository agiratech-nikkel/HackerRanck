const res = document.getElementById("res");
let num1 = ''
let operator = ''
let num2 = '';

function add(value) {
    if (!operator) {
        num1 += value;
    } else {
        num2 += value;
    }
    result();
}

function clr() {
    num1 = operator = num2 = '';
    result();
}

function assignOperator(value) {
    operator = value;
    result();
}

function equal() {
    num1 = parseInt(num1, 2);
    num2 = parseInt(num2, 2);
    switch (operator) {
        case '+':
            if (num2)
                num1 += num2;
            break;
        case '-':
            if (num2)
                num1 -= num2;
            break;
        case '*':
            if (num2)
                num1 *= num2;
            break;
        case '/':
            if (num2)
                num1 /= num2;
            break;
        default:
            break;
    }
    num1 = parseInt(num1).toString(2);
    operator = num2 = '';
    result();
}

function result() {
    res.innerHTML = num1 + operator + num2;
}