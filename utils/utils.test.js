const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
        var res = utils.add(33,11);
        expect(res).toBe(44).toBeA('number');
        // if (res !== 44) {
        //   throw new Error (`${res} returned! Expected 44. Incorrect result`);
        // }
    });
  });

  describe('#asyncadd', () => {
    it('should asyncAdd two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });
  
  it('should asyncSquare two numbers', (done) => {
    utils.asyncSquare(4, (square) => {
      expect(square).toBe(16).toBeA('number');
      done();
    });
  });


  it('should square a number', () => {
    var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
    // if (res !== 16) {
    //   throw new Error (`${res} returned! Expected 16. Incorrect result`);
    // }
  });
});


//should verify first and last names are set
// assert it includes firstName and lastName with proper values

it('should verify first and last names are set', () => {
  var res = utils.setName({ age: 50, location: 'Apex' }, 'Dasa Raghavan');
  expect(res.firstName).toMatch('Dasa');
  expect(res.lastName).toMatch('Raghavan');
  expect(res).toIncludeKeys(['age', 'location']);
});
