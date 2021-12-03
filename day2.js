s = require("fs").readFileSync("day2.input").toString();
a = s
  .split("\n")
  .map((x) => x.split(" "))
  .map(([a, b]) => [a, parseInt(b)]);
response1 = a
  .reduce(
    ([hor, dep], [dir, len]) =>
      dir === "forward"
        ? [hor + len, dep]
        : dir === "up"
        ? [hor, dep - len]
        : [hor, dep + len],
    [0, 0]
  )
  .reduce((acc, cur) => acc * cur, 1);
console.log(response1);

response2 = a
  .reduce(
    ([horizontal, depth, aim], [direction, length]) =>
      direction === "forward"
        ? [horizontal + length, depth + length * aim, aim]
        : direction === "up"
        ? [horizontal, depth, aim - length]
        : [horizontal, depth, aim + length],
    [0, 0, 0]
  )
  .slice(0, -1) // remove last element (aim)
  .reduce((acc, cur) => acc * cur, 1);
console.log(response2);
