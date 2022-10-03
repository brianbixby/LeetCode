const numSquares = (n) => {
    if (n<4) return n;
    let dict = {0: 0, 1: 1, 2: 2, 3: 3};
    for (let i=4;i<=n;i++) {
        dict[i] = i;
        for (let j=1; j * j <= i; j++) {
            dict[i] = Math.min(dict[i], dict[i - j*j] + 1);
        }
    }
    return dict[n]
};