const expect = require("chai").expect;
const lib = require("../lib/index")
//const cpfValidator = lib.cpfValidator;

describe("cpfValidator",() => {
    it ("Return valid if '32222540879'",() => {
        expect(lib.cpfValidator(32222540879)).to.equal(true);
    });

    it ("Return false if < 11",() => {
      expect(lib.cpfValidator('1234567890')).to.equal(false);

    });

    it ("Return false if > 11",() => {
        expect(lib.cpfValidator(123456789012)).to.equal(false);
    });

    it ("Return invalid if '00000000000'",() =>{
        expect(lib.cpfValidator("00000000000")).to.equal(false);
    });

    it ("Return invalid if '11111111111'",() =>{
        expect(lib.cpfValidator("11111111111")).to.equal(false);
    });

    it ("Return invalid if '99999999999'",() =>{
        expect(lib.cpfValidator("99999999999")).to.equal(false);
    });

    it ("Return invalid if 'aaaaaa'",() =>{
        expect(lib.cpfValidator('aaaaaa')).to.equal(false);
    });
})