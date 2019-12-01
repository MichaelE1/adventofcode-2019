const input = require("./inputs/day1-input");

// /* Part 1 */
// const total = input.reduce((acc, val) => Math.floor(val / 3) - 2 + acc, 0);
// console.log(total);

/* Part 2 */
let totalFuel = 0;

input.forEach(initialMass => {
  let remainingMass = initialMass;

  while (remainingMass > 0) {
    const fuel = Math.floor(remainingMass / 3) - 2;

    if (fuel > 0) {
      totalFuel += fuel;
    }

    remainingMass = fuel;
  }
});

console.log(totalFuel);
