[![Build Status](https://travis-ci.org/eseredova/lenkapenka-stack.svg?branch=master)](https://travis-ci.org/eseredova/lenkapenka-stack)
[![Dependency Status](https://www.versioneye.com/user/projects/581b54084304530b557dc694/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/581b54084304530b557dc694)
[![Coverage Status](https://coveralls.io/repos/github/eseredova/lenkapenka-stack/badge.svg?branch=master)](https://coveralls.io/github/eseredova/lenkapenka-stack?branch=master)

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
