// function modifyArray(nums) {
// let ans = nums.map(num => num * (num % 2 === 0 ? 2 : 3));
// return ans
// }

function modifyArray(nums) {
    const init = 0
    let ans = nums.reduce((target, num, init) => {
        target.push(
            num % 2 === 0 ?
            num * 2 :
            num * 3
        );
        return target;
    }, [])
    return ans
}