module.exports = function reverse (n) {
    let s;
    if (n > 0) {
        s = n.toString().split('').reverse().join('');
    } else {
        s = (-1 * n).toString().split('').reverse().join('');
    }

  return +s;
}
