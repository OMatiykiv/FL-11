function reverseNumber(a) {
    let arr = [];
    let positive = a * Math.sign(a);
    if (+a === +a.toFixed(0)) {
        while (positive > 0) {
            arr.push(positive % 10);
            positive = (positive - (positive % 10)) / 10;
        }
        return (arr.join("") * Math.sign(a));
    }
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);