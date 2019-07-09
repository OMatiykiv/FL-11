function isSmaller(a, b) {
    function isBigger(a, b) {
        return (a > b);
    }
    return (!isBigger(a, b) && (a !== b))
}

isSmaller(5, -1);