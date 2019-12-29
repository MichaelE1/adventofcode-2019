const Combinatorics = require("js-combinatorics");
const input = require("./inputs/day7-input");

let phaseSettingPossibilities = [0, 1, 2, 3, 4];

const permutations = Combinatorics.permutation(
  phaseSettingPossibilities
).toArray();

let highestTotal = 0;

for (let i = 0; i < permutations.length; i++) {
  let currentTotal = 0;
  for (let j = 0; j < 5; j++) {
    const instruction = [cmb[i][j], currentTotal];
    currentTotal = amplifier(instruction);
  }

  if (currentTotal > highestTotal) {
    highestTotal = currentTotal;
  }
}

console.log(highestTotal);

function amplifier(ampliferInput) {
  let i = 0;

  while (i < input.length) {
    const instruction = input[i].toString().padStart(5, "0");
    const opcode = Number(instruction.slice(3));
    const parameter1Mode = Number(instruction.charAt(2));
    const parameter2Mode = Number(instruction.charAt(1));

    if (opcode === 1) {
      const parameter1 = getParameter(parameter1Mode, i + 1);
      const parameter2 = getParameter(parameter2Mode, i + 2);
      input[input[i + 3]] = parameter1 + parameter2;
      // i needs to increase by 4 positions
      i += 4;
    }

    if (opcode === 2) {
      const parameter1 = getParameter(parameter1Mode, i + 1);
      const parameter2 = getParameter(parameter2Mode, i + 2);
      input[input[i + 3]] = parameter1 * parameter2;
      // i needs to increase by 4 positions
      i += 4;
    }

    if (opcode === 3) {
      input[input[i + 1]] = ampliferInput.shift();
      // i needs to increase by 2 positions
      i += 2;
    }

    if (opcode === 4) {
      return input[input[i + 1]];
      // i needs to increase by 2 positions
      i += 2;
    }

    if (opcode === 5) {
      const parameter1 = getParameter(parameter1Mode, i + 1);
      if (parameter1 !== 0) {
        i = getParameter(parameter2Mode, i + 2);
      } else {
        i += 3;
      }
    }

    if (opcode === 6) {
      const parameter1 = getParameter(parameter1Mode, i + 1);
      if (parameter1 === 0) {
        i = getParameter(parameter2Mode, i + 2);
      } else {
        i += 3;
      }
    }

    if (opcode === 7) {
      const parameter1 = getParameter(parameter1Mode, i + 1);
      const parameter2 = getParameter(parameter2Mode, i + 2);
      if (parameter1 < parameter2) {
        input[input[i + 3]] = 1;
      } else {
        input[input[i + 3]] = 0;
      }
      i += 4;
    }

    if (opcode === 8) {
      const parameter1 = getParameter(parameter1Mode, i + 1);
      const parameter2 = getParameter(parameter2Mode, i + 2);
      if (parameter1 === parameter2) {
        input[input[i + 3]] = 1;
      } else {
        input[input[i + 3]] = 0;
      }
      i += 4;
    }

    if (opcode === 99) {
      return;
    }
  }

  function getParameter(parameterMode, position) {
    if (parameterMode === 0) {
      return input[input[position]]; // position mode
    } else {
      return input[position]; // immediate mode
    }
  }
}
