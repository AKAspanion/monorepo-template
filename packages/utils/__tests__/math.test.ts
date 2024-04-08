import { add, sub } from "../src/math";

describe("Utility | Main", () => {
  it("add - should add the given two numbers", () => {
    expect(add(4, 2)).toEqual(6);
  });

  it("sub - should subtract the given two numbers", () => {
    expect(sub(4, 2)).toEqual(2);
  });
});
