const addFn = (op1, op2) => {
  return op1 + op2;
};

const subFn = (op1, op2) => {
  return op1 - op2;
};

const mulFn = (op1, op2) => {
  return op1 * op2;
};

// commonjs exporting
// module.exports = {
//   addFn,
//   subFn,
//   mulFn,
// };

// ES Module
export default { addFn, subFn, mulFn };
