// Exercise - 01

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];

console.log(secondCity);

// Exercise - 02

euroCities[0] = "Berlin";

console.log(euroCities);

// Exercise - 03

console.log(euroCities.length);

// Exercise - 04

euroCities.pop();

console.log(euroCities);

// Exercise - 05

euroCities.push("Budapest");

console.log(euroCities);

// Exercise - 06

const asianCities = ["Colombo", "Mumbai", "Jakartha", "Teheran", "Daka"];

// Exercise - 07

const worldCities = asianCities.concat(euroCities);

console.log(worldCities);

// Exercise - 08

worldCities.reverse();

console.log(worldCities);

// Exercise - 09

euroCities.splice(2, 1);

// Exercise - 10

const newAsianCities = asianCities.slice(1, 4);

console.log(newAsianCities);

// Exercise - 11

worldCities[2] = "Toronto";

// Exercise - 12

worldCities[2] = "Washington";

console.log(worldCities);

// Exercise - 13
console.log(worldCities.join(", "));

// Exercise - 14

const string = "Hello World";
console.log(string.split("").reverse().join(""));

// Exercise - 15

const mySiblings = [
  "Thisari",
  "Shanika",
  "Kanishka",
  "Upekshika",
  "Dinuka",
  "faya",
];
const parents = ["Deepika", "Lal"];

console.log(parents.concat(mySiblings));

const myPets = ["Rockey", "Lexi", "Rcikey", "Diana"];

console.log(myPets.reverse());

console.log(myPets[1]);

parents.splice(0, 1, "Damayanthi");

console.log(parents);
