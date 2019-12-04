/* Part One */

// const input = require("./inputs/day2-input");

// input[1] = 12;
// input[2] = 2;

// for (let i = 0; i < input.length - 1; i += 4) {
//   const opcode = input[i];

//   if (opcode === 1) {
//     input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
//   }

//   if (opcode === 2) {
//     input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
//   }

//   if (opcode === 99) {
//     console.log(input[0]);
//     return;
//   }
// }

/* Part Two */

const sampleInput = require("./inputs/day2-input");

for (let noun = 0; noun <= 99; noun++) {
  for (let verb = 0; verb <= 99; verb++) {
    const input = [...sampleInput];
    input[1] = noun;
    input[2] = verb;
    const result = intcode(input);
    if (result === 19690720) {
      console.log(100 * noun + verb);
      return;
    }
  }
}

function intcode(input) {
  for (let i = 0; i < input.length - 1; i += 4) {
    const opcode = input[i];

    if (opcode === 1) {
      input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
    }

    if (opcode === 2) {
      input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
    }

    if (opcode === 99) {
      return input[0];
    }
  }
}
