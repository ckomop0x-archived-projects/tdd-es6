import { expect } from "chai";
import { getLetterCount } from "./letter-count";

describe("getLetterCount - basic functionality", () => {
  it("return an empty object when passed an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });

  it("should return the correct letter count for a word with only one of each letter", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).to.deep.equal(expected);
  });

  it("should return the correct letter count for a word with more than one of each letter", () => {
    const expected = { p: 3, u: 1, y: 1 };
    const actual = getLetterCount("puppy");
    expect(actual).to.deep.equal(expected);
  });
});
