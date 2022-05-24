function getMaxLessThanK(n, k) {
    let ans = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let btw = a & b;

            if (btw < k && btw > ans)
                ans = btw;
        }
    }
    return ans;
}