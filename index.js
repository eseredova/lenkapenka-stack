'use strict';

const assert = require('assert');


class Stack {


    /**
     * Creates a new Stack
     * @constructor
     */
    constructor() {
        this.stack = [];
    }


    /**
     * Adds a new element onto the top of the stack
     * @param {object} value any object that you want to store in a stack
     */
    push(value) {
        this.stack.push(value);
    }


    /**
     * Checks if the stack is empty or not
     * @return {boolean} true if stack is empty, false otherwise
     */
    isEmpty() {
        return this.stack.length === 0;
    }

    /**
     * Removes the element from the top of the stack
     * @return {object} value of the top element of the stack
     * @throws Will throw an error if stack is empty
     */
    pop() {
        assert.strictEqual(this.isEmpty(), false, 'Empty stack');
        return this.stack.pop();

    }

    /**
     * Returns the element from the top of the stack
     * @return {object} value of the top element of the stack
     * @throws Will throw an error if stack is empty
     */
    peek() {
        assert.strictEqual(this.isEmpty(), false, 'Empty stack');
        return this.stack[this.stack.length - 1];
    }
}


module.exports = Stack;
