function isInteger(a) {
    return(+a === +a.toFixed(0));
}

isInteger(5);
isInteger(5.1);