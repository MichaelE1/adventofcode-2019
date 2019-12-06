/* Part A */

// const lowerBound = 124076;
// const upperBound = 580769;

// let passwords = 0;

// for (let i = lowerBound; i < upperBound; i++) {
//   const value = i.toString();
//   let adjacent = false;
//   let decreasing = true;

//   for (let k = 0; k < value.length; k++) {
//     if (value[k] === value[k + 1]) {
//       adjacent = true;
//     }

//     if (value[k] > value[k + 1]) {
//       decreasing = false;
//     }
//   }

//   if (adjacent && decreasing) {
//     passwords++;
//   }
// }

// console.log(passwords);

/* Part B */

const lowerBound = 124076;
const upperBound = 580769;

let passwords = 0;

for (let i = lowerBound; i < upperBound; i++) {
  const value = i.toString();
  let adjacent = false;
  let decreasing = true;
  const matchingGroup = groupSearch(value);

  if (!matchingGroup) {
    for (let k = 0; k < value.length; k++) {
      if (value[k] === value[k + 1]) {
        adjacent = true;
      }

      if (value[k] > value[k + 1]) {
        decreasing = false;
      }
    }
  }

  if (adjacent && decreasing && !matchingGroup) {
    passwords++;
  }
}

function groupSearch(value) {
  let threeOrMoreDigits = 0;
  let twoDigits = 0;
  const pairs = value.match(/(.)\1*/g);

  pairs.forEach(pair => {
    if (pair.length === 2) {
      twoDigits++;
    } else {
      threeOrMoreDigits++;
    }
  });

  return threeOrMoreDigits >= 1 && twoDigits <= 0;
}

console.log(passwords);
