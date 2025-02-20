'use strict';

const array = () => {
  const hash = [];
  const fn = (idx) => hash[idx];
  fn.push = (val) => hash.push(val);
  fn.pop = () => hash.pop();
  return fn;
};

module.exports = { array };
