let a = +prompt('enter \'a\' side length of the triangle', '');
let b = +prompt('enter \'b\' side length of the triangle', '');
let c = +prompt('enter \'c\' side length of the triangle', '');
if (a + b <= c || b + c <= a || c + a <= b) {
    console.log('Triangle doesn’t exist')
} else if (a === b && b === c) {
    console.log('Eequivalent triangle')
} else if (a === b || b === c || c === a) {
    console.log('Isosceles triangle')
} else {
    console.log('Normal triangle')
}