'use strict';

const assert = require('assert');
const Stack = require('./index.js');


describe('Stack tests', function () {
    it('should be a function', function () {
        assert.strictEqual(typeof Stack, 'function', 'Stack is not a function');
    });

    it('should be empty by default', function () {
        const stack = new Stack();
        assert.ok(stack.isEmpty(), 'New stack is not empty!');
    });

    it('should not be empty after push', function () {
        const stack = new Stack();
        stack.push(1);
        assert.ifError(stack.isEmpty(), 'Stack is empty!');
    });

});
