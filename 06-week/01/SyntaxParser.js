import { scan } from "./LexParser.js";

let syntax = {
  Program: [["StatementList", "EOF"]],
  StatementList: [
    ["Statement"],
    ["StatementList", "Statement"]
  ],
  Statement: [
    ["ExpressionStatement"],
    ["IfStatement"],
    ["VariableDeclaration"],
    ["FunctionDeclaration"]
  ],
  IfStatement: [
    ["if", "(", "Expression", ")", "Statement"]
  ],
  VariableDeclaration: [
    ["var", "Identifier", ";"],
    ["let", "Identifier", ";"]
  ],
  FunctionDeclaration: [
    ["function", "Identifier", "(", ")", "{", "StatementList", "}"]
  ],
  ExpressionStatement: [
    ["Expression", ";"]
  ],
  Expression: [
    ["AssignmentExpression"]
  ],
  AssignmentExpression: [
    ["Identifier", "=", "AssignmentExpression"],
    ["AdditiveExpression"]
  ],
  AdditiveExpression: [
    ["MultiplicativeExpression"],
    ["AdditiveExpression", "+", "MultiplicativeExpression"],
    ["AdditiveExpression", "-", "MultiplicativeExpression"],
  ],
  MultiplicativeExpression: [
    ["PrimaryExpression"],
    ["MultiplicativeExpression", "*", "PrimaryExpression"],
    ["MultiplicativeExpression", "/", "PrimaryExpression"],
  ],
  PrimaryExpression: [
    ["(", "Expression", ")"],
    ["Literal"],
    ["Identifier"],
  ],
  Literal: [
    ["NumericalLiteral"],
    ["BooleanLiteral"],
    ["StringLiteral"],
    ["NullLiteral"],
    ["RegularExpressionLiteral"],
    ["ObjectLiteral"],
    ["ArrayLiteral"],
  ],
  ObjectLiteral: [
    ["{", "}"],
    ["{", "PropertyList", "}"]
  ],
  PropertyList: [
    ["Property"],
    ["PropertyList", ",", "Property"],
  ],
  Property: [
    ["StringLiteral", ":", "AdditiveExpression"],
    ["Identifier", ":", "AdditiveExpression"]
  ]
}

let hash = {

};

function closure(state) {
  hash[JSON.stringify(state)] = state;
  let queue = [];
  for(let symbol in state) {
    if(symbol.match(/^\$/)) {
      continue;
    }
    queue.push(symbol);
  }
  while(queue.length) {
    let symbol = queue.shift();
    if(syntax[symbol]) {
      for(let rule of syntax[symbol]) {
        if(!state[rule[0]])
          queue.push(rule[0]);
        
        let current = state;
        for(let part of rule) {
          if(!current[part]) {
            current[part] = {};
          }
          current = current[part];
        }
        current.$reduceType = symbol;
        current.$reduceLength = rule.length;
      }
    }
  }
  for(let symbol in state) {
    if(symbol.match(/^\$/)) {
      continue;
    }
    if(hash[JSON.stringify(state[symbol])]) 
      state[symbol] = hash[JSON.stringify(state[symbol])];
    else 
      closure(state[symbol]);
  }
}

let end = {
  $isEnd: true
}

let start = {
  "Program": end
}

closure(start);

function parse(source) {
  let stack = [start];
  let symbolStack = [];
  function reduce() {
    let state = stack[stack.length - 1];
    if(state.$reduceType) {
      let children = [];
      for(let i = 0; i < state.$reduceLength; i++) {
        stack.pop();
        children.push(symbolStack.pop());
      }
      
      /* create a non-terminal symbol and shift it */
      return {
        type: state.$reduceType,
        children: children.reverse()
      };
    } else {
      throw new Error("unexpected token")
    }
  }
  
  function shift(symbol) {
    let state = stack[stack.length - 1];
    if(symbol.type in state) {
      stack.push(state[symbol.type]);
      symbolStack.push(symbol);
    } else {
      /* reduce to non-terminal symbols */
      shift(reduce());
      shift(symbol);
    }
  }
  for(let symbol/* terminal symbols */ of scan(source)) {
    shift(symbol);
    //console.log(symbol);
  } 
  return reduce();
}

class Realm {
  constructor() {
    this.global = new Map(),
    this.Object = new Map(),
    this.Object.call = function() {

    }
    this.Object_prototype = new Map()
  }
}

class EnvironmentRecord {
  constructor() {
    this.thisValue
    this.variables = new Map();
    this.outer = null;
  }
}

class ExecutionContext {
  constructor() {
    this.lexicalEnvironment = {};
    this.variableEnvironment = this.lexicalEnvironment;
    this.realm = {
      // global: {},
      // Object: {},
      // Object_prototype: {}
    }
  }
  //LexicalEnvironment: {a:1, b:2}
}

class Reference {
  constructor(object, property) {
    this.object = object;
    this.property = property;
  }
  set(value) {
    this.object[this.property] = value;
  }
  get() {
    return this.object[this.property];
  }
}

let evaluator = {
  Program(node) {
    return evaluate(node.children[0]);
  },
  StatementList(node) {
    if(node.children.length === 1) {
      return evaluate(node.children[0]);
    } else{
      evaluate(node.children[0]);
      return evaluate(node.children[1]);
    }
  },
  Statement(node) {
    return evaluate(node.children[0]);
  },
  VariableDeclaration(node) {
    debugger;
    let runningEC = ecs[ecs.length - 1];
    runningEC.variableEnvironment[node.children[1].name];
  },
  ExpressionStatement(node) {
    return evaluate(node.children[0]);
  },
  Expression(node) {
    return evaluate(node.children[0]);
  },
  AdditiveExpression(node) {
    if(node.children.length === 1) {
      return evaluate(node.children[0]);
    } else { 
      //TODO
    }
    
  },
  MultiplicativeExpression(node) {
    if(node.children.length === 1) {
      return evaluate(node.children[0]);
    } else { 
      //TODO
    }
    
  },
  PrimaryExpression(node) {
    if(node.children.length === 1) {
      return evaluate(node.children[0]);
    }
  },
  Literal(node) {
    return evaluate(node.children[0]);
  },
  NumericalLiteral(node) {
    let str = node.value;
    let l = str.length;
    let value = 0;
    let n = 10;

    if(str.match(/^0b/)){
      n = 2;
      l -= 2;
    } else if(str.match(/^0o/)){
      n = 8;
      l -= 2;
    } else if(str.match(/^0x/)) {
      n = 16;
      l -= 2;
    }

    while(l--) {
      let c = str.charCodeAt(str.length - l - 1);
      if(c >= 'a'.charCodeAt(0)) {
        c = c - 'a'.charCodeAt(0) + 10;
      } else if(c >= 'A'.charCodeAt(0)) {
        c = c - 'A'.charCodeAt(0) + 10;
      } else if(c >= '0'.charCodeAt(0)) {
        c = c - '0'.charCodeAt(0);
      }
      value = value * n + c;
    }

    //console.log(value);
    return value;
  },
  StringLiteral(node) {
    let result = [];
    for(let i = 1; i < node.value.length - 1; i++) {
      if(node.value[i] === '\\') {
        ++i;
        let c = node.value[i];
        let map = {
          "\"": "\"",
          "\'": "\'",
          "\\": "\\",
          "0": String.fromCharCode(0x0000),
          "b": String.fromCharCode(0x0008),
          "f": String.fromCharCode(0x000C),
          "n": String.fromCharCode(0x000A),
          "r": String.fromCharCode(0x000D),
          "t": String.fromCharCode(0x0009),
          "v": String.fromCharCode(0x000B),
        }
        if(c in map) {
          result.push(map[c]);
        } else {
          result.push(c);
        }
      } else {
        result.push(node.value[i]);
      }
    }
    //console.log(result);
    return result.join('');
  },
  ObjectLiteral(node) {
    if(node.children.length === 2) {
      return {};
    }
    if(node.children.length === 3) {
      let object = new Map();
      this.PropertyList(node.children[1], object);
      //object.prototype = 
      return object;
    }
  },
  PropertyList(node, object) {
    if(node.children.length === 1) {
      this.Property(node.children[0], object);
    } else {
      this.PropertyList(node.children[0], object);
      this.Property(node.children[2], object);
    }
  },
  Property(node, object) {
    let name;
    if(node.children[0].type === "Identifier") {
      name = node.children[0].name;
    } else if(node.children[0].type === "StringLiteral") {
      name = evaluate(node.children[0].name);
    }
    object.set(name, { 
      value: evaluate(node.children[2]),
      writable: true,
      enumerable: true,
      configurable: true
    });
  },
  AssignmentExpression(node) {
    if(node.children.length === 1) {
      return evaluate(node.children[0]);
    }
    let left = evaluate(node.children[0]);
    let right = evaluate(node.children[2]);
    left.set(right);
  },
  Identifier(node) {
    let runningEC = ecs[ecs.length - 1];
    return new Reference(
      runningEC.lexicalEnvironment,
      node.name
    );
  }
}
let realm = new Realm();
let ecs = [new ExecutionContext];

function evaluate(node) {
  if(evaluator[node.type]) {
    let r = evaluator[node.type](node);
    //console.log(r);
    return r;
  }
}

//////////////////

window.js = {
  evaluate,parse
}