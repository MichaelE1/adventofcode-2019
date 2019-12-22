/* Part One */

// const input = require("./inputs/day6-input");

// const orbits = input.reduce((orbits, line) => {
//   const [object1, object2] = line.split(")");
//   orbits[object2] = object1;
//   return orbits;
// }, {});

// let totalOrbits = 0;

// Object.keys(orbits).forEach(currentOrbit => {
//   let nextObject = orbits[currentOrbit];

//   while (nextObject) {
//     nextObject = orbits[nextObject];
//     totalOrbits++;
//   }
// });

// console.log(totalOrbits);

/* Part Two */

const input = require("./inputs/day6-input");

const allOrbits = input.reduce((orbits, line) => {
  const [object1, object2] = line.split(")");
  orbits[object2] = object1;
  return orbits;
}, {});

const getOrbitedObjects = orbiter => {
  if (orbiter in allOrbits) {
    return [allOrbits[orbiter], ...getOrbitedObjects(allOrbits[orbiter])];
  }
  return [];
};

const orbitedByYou = getOrbitedObjects("YOU");
const orbitedBySan = getOrbitedObjects("SAN");

for (let i = 0; i < orbitedByYou.length; i++) {
  const index = orbitedBySan.findIndex(
    satellite => satellite === orbitedByYou[i]
  );

  if (index !== -1) {
    console.log(index + i);
    break;
  }
}
