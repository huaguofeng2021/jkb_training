//使用状态机处理“abcabcabx”这样的字符串
function match(string) {
  let state = start;
  for(let c of string) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if(c === 'a') {
    return foundA;
  }else{
    return start;
  }
}

function end(c) {
  return end;
}

function foundA(c) {
  if(c === 'b') {
    return foundB;
  }else{
    return start(c);
  }
}

function foundB(c) {
  if(c === 'c') {
    return foundC;
  }else{
    return start(c);
  }
}

function foundC(c) {
  if(c === 'a') {
    return foundA2;
  }else{
    return start(c);
  }
}

function foundA2(c) {
  if(c === 'b') {
    return foundB2;
  }else{
    return start(c);
  }
}

function foundB2(c) {
  if(c === 'x') {
    return end;
  }else{
    return foundB(c);
  }
}

console.log(match("abcabcabx"));

//1. 使用状态机完成“abababx” 的处理
//2. 我们如何用状态机处理完全未知的pattern?参考算法：字符串KMP算法