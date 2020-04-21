import deepEqual from 'deep-equal';
import { getLetterCount } from "./letter-count";

export const isAnagrams = (stringOne, stringTwo) => {
  const stringOneLowerCasedString = stringOne.toLowerCase().split(" ").join("");
  const stringTwoLowerCasedString = stringTwo.toLowerCase().split(" ").join("");
  const stringOneLettersCount = getLetterCount(stringOneLowerCasedString);
  const stringTwoLettersCount = getLetterCount(stringTwoLowerCasedString);

  return deepEqual(stringOneLettersCount, stringTwoLettersCount);
};
