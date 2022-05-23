function modifyArray(nums) {
    let ans = nums.map(num => num * (num % 2 === 0 ? 2 : 3));
    return ans
}