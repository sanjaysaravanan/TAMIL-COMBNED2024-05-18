console.log("Hello World");

// console.log(window);

// will work in Node.js
// console.log(global);

console.log("################ CMD Line Arguments ################");

// print all the number till n

function printTillN(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

console.log("cmd line arguments", process.argv);

printTillN(parseInt(process.argv[2] || 10));
