import { expect } from "chai";
import { isAnagrams } from "./isAnagrams";

describe("anagrams TDD challenge", () => {
  it('should pass anagram for "listen" and "silent"', () => {
    expect(isAnagrams("listen", "silent")).to.deep.equal(true);
  });

  it('should pass anagram for "elbow" and "below"', () => {
    expect(isAnagrams("elbow", "below")).to.deep.equal(true);
  });

  it('shouldn\'t pass anagram for "elbows" and "below"', () => {
    expect(isAnagrams("elbows", "below")).to.deep.equal(false);
  });

  it('shouldn\'t pass anagram for "listens" and "silent"', () => {
    expect(isAnagrams("listens", "silent")).to.deep.equal(false);
  });

  it('should pass anagram for "conversation" and "voices rant on"', () => {
    expect(isAnagrams("conversation", "voices rant on")).to.deep.equal(true);
  });

  it('should pass anagram for "STATE" and "taste"', () => {
    expect(isAnagrams("STATE", "taste")).to.deep.equal(true);
  });
});
