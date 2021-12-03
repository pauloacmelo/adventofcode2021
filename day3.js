s = require("fs").readFileSync("day3.input").toString();
a = s.split("\n").filter(Boolean);

// I know we can parseInt, just trying to have some fun
const binaryToDecimal = (binary) =>
  binary.split("").reduce((acc, cur) => 2 * acc + parseInt(cur), 0);

const mostCommonBit = a[0]
  .split("")
  .map((_, index) =>
    a.map((row) => parseInt(row[index])).reduce((a, b) => a + b, 0) >
    a.length / 2
      ? 1
      : 0
  )
  .map(String)
  .join("");
const inverseBinary = (binary) =>
  binary
    .split("")
    .map((v) => 1 - parseInt(v))
    .map(String)
    .join("");
const leastCommonBit = inverseBinary(mostCommonBit);
const power = binaryToDecimal(mostCommonBit) * binaryToDecimal(leastCommonBit);
console.log(power);

// Part 2
const mostCommonCascadingBit = a[0].split("").reduce(
  (filteredSet, _, index) => {
    if (filteredSet.length === 1) return filteredSet;
    const sum =
      filteredSet
        .map((row) => parseInt(row[index]))
        .reduce((a, b) => a + b, 0) / filteredSet.length;
    const mostCommonBit = sum >= 0.5 ? '1' : '0';
    return filteredSet.filter((row) => row[index] === mostCommonBit);
  },
  a
)[0]
const leastCommonCascadingBit = a[0].split("").reduce(
  (filteredSet, _, index) => {
    if (filteredSet.length === 1) return filteredSet;
    const sum =
      filteredSet
        .map((row) => parseInt(row[index]))
        .reduce((a, b) => a + b, 0) / filteredSet.length;
    const leastCommonBit = sum >= 0.5 ? '0' : '1';
    return filteredSet.filter((row) => row[index] === leastCommonBit);
  },
  a
)[0];
const lifeSupportRating =
  binaryToDecimal(mostCommonCascadingBit) *
  binaryToDecimal(leastCommonCascadingBit);
console.log(lifeSupportRating);
