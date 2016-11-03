# Stack
Simple stack implementation in JavaScript

# How to develop
```bash
git clone git@github.com:eseredova/lenkapenka-stack.git
cd lenkapenka-stack
npm install
```

# API
```javascript
const Stack = require('lenkapenka-stack');
const stack = new Stack();

//adds a new element onto the top of the stack
stack.push(value)
//removes the element from the top of the stack
stack.pop()
//returns the element from the top of the stack
stack.peek()
//returns true if stack is empty, false otherwise
stack.isEmpty()

```
