const avg = require("./avg");
const assert = require("assert");

let result = avg(1, 2, 3, 4, 5, 6);

if (result === 3.5) {
  console.log(`✅ "avg" should work correctly`);
} else {
  throw new Error(`😱 "avg" is broken; expected ${result} to equal 3.5`);
}
