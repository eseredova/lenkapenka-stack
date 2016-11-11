'use strict';



class Stack {


    /**
     * Creates a new Stack
     * @constructor
     * @this {Stack}
     */
    constructor() {
        this.stack = [];
    }


    /**
     * @function
     * @param {object} value any object that you want to store in a stack
     * @summary Adds a new element onto the top of the stack
     */
    push(value) {
        this.stack.push(value);
    }


    /**
     * Checks if stack is empty
     * @function
     * @return {boolean} true if stack is empty, false otherwise
     * @summary Checks if the stack is empty or not
     */
    isEmpty() {
        return this.stack.length === 0;
    }

    /**
     * @function
     * @return {object} value of the top element of the stack
     * @throws Will throw an error if stack is empty
     * @summary Removes the element from the top of the stack
     */
    pop() {
        if (this.stack.length === 0) {
            throw new Error('Empty stack!');
        } else {
            return this.stack.pop();
        }
    }

    /**
     * @function
     * @return {object} value of the top element of the stack
     * @throws Will throw an error if stack is empty
     * @summary Returns the element from the top of the stack
     */
    peek() {
        if (this.stack.length === 0) {
            throw new Error('Empty stack!');
        } else {
            return this.stack[this.stack.length - 1];
        }
    }
}


module.exports = Stack;
