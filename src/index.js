module.exports = function reverse (n) {
  let nStr = String(n);
  if(nStr[0] === "-")
    nStr = nStr.slice(1, nStr.length)
  return +nStr.split('').reverse().join('');
}
