s = require("fs").readFileSync("day1.input").toString();
a = s.split("\n").map((x) => parseInt(x));

response1 = a.filter((v, i, arr) => i > 0 && v > arr[i - 1]).length;
console.log(response1);

response2 = a
  .map((v, i, arr) => arr[i - 2] + arr[i - 1] + v)
  .slice(2)
  .filter((v, i, arr) => i > 0 && v > arr[i - 1]).length;
console.log(response2);
