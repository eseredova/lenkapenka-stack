'use strict';

function Stack () {
    this.stack = [];
}

Stack.prototype.push = function(value) {
    this.stack.push(value);
};

Stack.prototype.isEmpty = function() {
    return this.stack.length === 0;
};

Stack.prototype.pop = function () {
    if (this.stack.length === 0) {
        throw new Error('Empty stack!');
    } else {
        return this.stack.pop();
    }
};

Stack.prototype.peek = function() {
    if (this.stack.length === 0) {
        throw new Error('Empty stack!');
    } else {
        return this.stack[this.stack.length - 1];
    }
};

module.exports = Stack;
