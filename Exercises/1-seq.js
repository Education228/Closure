'use strict';

const seq = (f) => (g) => {
  if(typeof g === 'number'){
    return f(g);
  }else{
    return seq(x => f(g(x)))
  }
}(typeof g === 'number' ? f(g) : seq((x) => f(g(x))));


module.exports = { seq };
