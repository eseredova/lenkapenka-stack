'use strict';

const assert = require('assert');
const Stack = require('./index.js');


describe('Stack tests', function () {
    it('should be a function', function () {
        assert.strictEqual(typeof Stack, 'function', 'Stack is not a function');

        const stack = new Stack();
        assert.strictEqual(typeof stack.push, 'function', 'stack.push is not a function');
        assert.strictEqual(typeof stack.pop, 'function', 'stack.pop is not a function');
        assert.strictEqual(typeof stack.peek, 'function', 'stack.peek is not a function');
        assert.strictEqual(typeof stack.isEmpty, 'function', 'stack.isEmpty is not a function');
    });
});

describe('push tests', function () {
    it('should not be empty after push', function () {
        const stack = new Stack();
        stack.push(1);
        assert.strictEqual(stack.isEmpty(), false, 'Stack is empty!');
    });
});

describe('pop test', function () {
    it ('should be empty after push and pop', function() {
        const stack = new Stack();
        stack.push(1);
        stack.pop();
        assert.ok(stack.isEmpty(), 'New stack is not empty!');
    });

    it ('should throw error if all elements poped', function () {
        const stack = new Stack();
        stack.push(1);
        stack.pop();
        assert.throws( () => {
            stack.pop();
        }, 'Did not throw expected error!');
    });

    it('should return value of popping element', function () {
        const stack = new Stack;
        stack.push(1);
        stack.push('hello');
        assert.strictEqual(stack.pop(), 'hello');
    });


});

describe('peek tests', function () {
    it ('should return the top element from the stack', function() {
        const stack = new Stack ();
        stack.push(1);
        assert.strictEqual(stack.peek(), (1), 'New element is not on the top!');
    });

    it('should return the top element from the stack - several pushes', function() {
        const stack = new Stack ();
        stack.push(1);
        stack.push('ho-ho-ho!');
        assert.strictEqual(stack.peek(), ('ho-ho-ho!'), 'New element is not on the top!');
    });

    it ('should throw error if all elements poped', function () {
        const stack = new Stack();
        stack.push(1);
        stack.pop();
        assert.throws( () => {
            stack.peek();
        }, 'Did not throw expected error.');


    });

});

describe('isEmpty tests', function () {
    it('should return true if stack is empty', function() {
        const stack = new Stack();
        assert.deepStrictEqual(stack.isEmpty(), true);
    });

    it('should return false if stack is not empty', function() {
        const stack = new Stack();
        stack.push(1);
        assert.deepStrictEqual(stack.isEmpty(), false);
    });

});
