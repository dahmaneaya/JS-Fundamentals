

function add(a, b) {
  return a + b;
}

const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[3]);

console.log(add(firstNum, secondNum));