function cpfValidator(cpf) {
  const strNumber = cpf.toString();
  let numArr = strNumber.split('').slice(0, 9);
    
  function firstDigit(numArr) {
    let total = 10;
    const calculate = numArr.map((elem) => elem * (total--));
    const digitOne = calculate.reduce((acc, curr) => acc + curr);
    const testDigit = digitOne % 11;
    return testDigit < 2 ? 0 : 11 - testDigit;
  }
   
  function secondDigit(numArr) {
    let total = 11;
    let digit = numArr.concat(firstDigit(numArr));
    const calculate = digit.map((elem) => elem * (total--));
    const digitTwo = calculate.reduce((acc, curr) => acc + curr);
    const testDigit = digitTwo % 11;
    return testDigit < 2 ? 0 : 11 - testDigit;
  }
    
  if (strNumber.length !== 11 ||
    strNumber === '00000000000' || strNumber === '11111111111' ||
    strNumber === '22222222222' || strNumber === '33333333333' ||
    strNumber === '44444444444' || strNumber === '55555555555' ||
    strNumber === '66666666666' || strNumber === '77777777777' ||
    strNumber === '88888888888' || strNumber === '99999999999') {
    return false;
  }
  if (firstDigit(numArr).toString() === strNumber.charAt(9) && secondDigit(numArr).toString() === strNumber.charAt(10)) {
    return true;
  }
}

module.exports.cpfValidator = cpfValidator;
