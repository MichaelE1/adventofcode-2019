// A brute force solution ^_^

const input = require("./inputs/day3-input");

/* PART A */

// const pairsA = new Set();
// const pairsB = new Set();

// const changeX = { R: 1, L: -1, U: 0, D: 0 };
// const changeY = { R: 0, L: 0, U: 1, D: -1 };

// function getPairs(linePath) {
//   let x = 0;
//   let y = 0;

//   linePath.forEach(move => {
//     const direction = move.charAt(0);
//     const steps = move.substring(1);

//     for (let i = 0; i < steps; i++) {
//       x += changeX[direction];
//       y += changeY[direction];

//       if (linePath === input.wireA) {
//         pairsA.add([x, y]);
//       } else {
//         pairsB.add([x, y]);
//       }
//     }
//   });
// }

// getPairs(input.wireA);
// getPairs(input.wireB);

// // Very slow...
// const intersection = [...pairsA].filter(a =>
//   [...pairsB].some(b => a[0] === b[0] && a[1] === b[1])
// );

// let distance = -1;

// intersection.forEach(pair => {
//   const calcDistance = Math.abs(pair[0]) + Math.abs(pair[1]);
//   if (distance === -1 || calcDistance < distance) {
//     distance = calcDistance;
//   }
// });

// console.log(distance);

/* PART B */

const pairsA = new Set();
const pairsB = new Set();

const changeX = { R: 1, L: -1, U: 0, D: 0 };
const changeY = { R: 0, L: 0, U: 1, D: -1 };

function getPairs(linePath) {
  let x = 0;
  let y = 0;
  let totalSteps = 0;

  linePath.forEach(move => {
    const direction = move.charAt(0);
    const steps = move.substring(1);

    for (let i = 0; i < steps; i++) {
      x += changeX[direction];
      y += changeY[direction];
      totalSteps += 1;

      if (linePath === input.wireA) {
        pairsA.add([x, y, totalSteps]);
      } else {
        pairsB.add([x, y, totalSteps]);
      }
    }
  });
}

getPairs(input.wireA);
getPairs(input.wireB);

let shortestSteps = -1;

[...pairsA].forEach(a => {
  [...pairsB].forEach(b => {
    if (a[0] === b[0] && a[1] == b[1]) {
      const combinedSteps = a[2] + b[2];
      if (shortestSteps === -1 || combinedSteps < shortestSteps) {
        shortestSteps = combinedSteps;
      }
    }
  });
});

console.log(shortestSteps);
