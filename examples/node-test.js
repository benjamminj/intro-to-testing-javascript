const avg = require("./avg");
const assert = require("assert");

const sum = avg(1, 2, 3, 4);

// if (sum === 2.5) {
//   console.log("✅ avg works correctly");
// } else {
//   throw new Error(`🚨 avg is broken; expected ${sum} to equal 2.5`);
// }

assert.equal(sum, 2.5, `🚨 avg is broken; expected ${sum} to equal 2.5`);
console.log("✅ avg works correctly");
