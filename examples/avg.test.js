const avg = require("./avg");
// takes a description
// testing context
describe("avg", () => {
  it("should average the numbers", () => {
    const sum = avg(1, 2, 3, 4);
    expect(sum).toEqual(2.5);
  });
});
