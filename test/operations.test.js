var assert = require('assert');
var operations = require('../math/operations');

describe('test sum operations', function () {
  describe('sucess sum', function () {
    it('should return 3 when sum 1 and 2', function () {
      assert.equal(3, operations.sum(1, 2));
    });
  });
});

describe('test sub operations', function () {
  describe('sucess sub', function () {
    it('should return -1 when sub 1 and 2', function () {
      assert.equal(-1, operations.sub(1, 2));
    });
  });
});

describe('test mult operations', function () {
  describe('sucess mult', function () {
    it('should return 2 when mult 1 and 2', function () {
      assert.equal(2, operations.mult(1, 2));
    });
  });
});

describe('test div operations', function () {
  describe('sucess simple div', function () {
    it('should return 2 when div 8 and 4', function () {
      assert.equal(2, operations.div(8, 4));
    });
  });

  describe('sucess test by zero', function () {
    it('should print message if divide by 0', function () {
      var errorMsg = 'Cannot divide by Zero';      
      assert.equal(errorMsg, operations.div(8, 0));
    });
  });
});