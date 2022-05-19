function getSecondLargest(nums) {
    // Complete the function
    var x = nums.sort(so)

    function so(g, h) {
        return g - h
    }
    var y = x.filter(ord)

    function ord(e, ind, s) {
        return ind == s.indexOf(e);
    }
    return y[y.length - 2];
}