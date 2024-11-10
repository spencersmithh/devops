var main = require('../index');
var assert = require('assert');

describe('Regular factorial value', function() {
    it('should return 120 for Fact(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('Factorial of 0 and 1', function() {
  it('should return 1 for Fact(0) and Fact(1)', function() {
      assert.strictEqual(main.factorial(0), 1);
      assert.strictEqual(main.factorial(1), 1);
    });
});