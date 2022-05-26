for (let i = d; i < arr.length; i++) {
    arr.unshift(arr.pop());
}
return arr