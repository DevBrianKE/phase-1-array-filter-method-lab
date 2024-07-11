// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const fuzzyMatch = function(drivers, letters) {
//     return drivers.filter(function(driver) {
//         return driver.toLowerCase().startsWith(letters.toLowerCase());
//     });
// };

const findMatching = (drivers, nameToMatch) => {
    return drivers.filter(driver => driver.toLowerCase() === nameToMatch.toLowerCase());
};

console.log(findMatching(drivers, 'Bobby')); 

// const fuzzyMatch = function(drivers, letters) {
//     return drivers.filter(function(driver) {
//         return driver.toLowerCase().startsWith(letters.toLowerCase());
//     });
// };
const fuzzyMatch = (drivers, letters) => {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
};

console.log(fuzzyMatch(drivers, 'Sa'))

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name);
};
console.log(matchName(drivers, 'Bobby'))