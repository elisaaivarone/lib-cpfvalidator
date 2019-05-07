const expect = require("chai").expect;
const lib = require("../lib/index")
const cpfValidator = lib.cpfValidator;

describe("cpfValidator",() => {
    it ("Return valid if '32222540879'",() =>{
        expect(cpfValidator('32222540879')).to.equal(true);
    });
    it ("Return false if < 11",() => {
      expect(cpfValidator(11)).to.equal(false);
    });
    it ("Return false if > 11",() =>{
        expect(cpfValidator(11)).to.equal(false);
    });
    it ("Return invalid if '00000000000'",() =>{
        expect(cpfValidator("00000000000")).to.equal(false);
    });
    it ("Return invalid if '11111111111'",() =>{
        expect(cpfValidator("11111111111")).to.equal(false);
    });
    it ("Return invalid if '99999999999'",() =>{
        expect(cpfValidator("99999999999")).to.equal(false);
    });
    it ("Return invalid if 'aaaaaa'",() =>{
        expect(cpfValidator('aaaaaa')).to.equal(false);
    });
})