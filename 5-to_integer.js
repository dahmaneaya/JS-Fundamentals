const firstArg = process.argv[2];

const num = parseInt(firstArg);

if (isNan(num)) {
    console.log("Not a number");
} else {
    console.log(` My number: ${num}`)
} 