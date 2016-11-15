'use strict';

const assert = require('assert');


    /**
     * Creates a new node
     * @constructor
     */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {


    /**
     * Creates a new Stack
     * @constructor
     */
    constructor() {
        this.head = null;
    }


    /**
     * Adds a new element onto the top of the stack
     * @param {object} value any object that you want to store in a stack
     */
    push(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }


    /**
     *
     * Checks if the stack is empty or not
     * @return {boolean} true if stack is empty, false otherwise
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Removes the element from the top of the stack
     * @return {object} value of the top element of the stack
     * @throws Will throw an error if stack is empty
     */
    pop() {
        assert.strictEqual(this.isEmpty(), false, 'Empty stack');
        const value = this.head.value;
        if (this.head.value) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        return value;
    }

    /**
     *
     * Returns the element from the top of the stack
     * @return {object} value of the top element of the stack
     * @throws Will throw an error if stack is empty
     */
    peek() {
        assert.strictEqual(this.isEmpty(), false, 'Empty stack');
        return this.head.value;
    }
}


module.exports = Stack;
