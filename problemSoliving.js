
//PH-Backpack Tasks


//   1. Task: Array Filtering and Mapping

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
];

function filterAndMapPeople(people) {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}

console.log(filterAndMapPeople(people));

// 5. Task: Array Reduction

function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

const numberss = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumEvenNumbers(numberss));

//   6. Task: Leap Year Checker

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));

//   7. Task: Unique Values

function uniqueNumbers(arr) {
  return [...new Set(arr)];
}

const number = [1, 2, 3, 4, 2, 3, 5];
console.log(uniqueNumbers(number));

//   8. Task: Find Maximum Value

function findMax(arr) {
  return Math.max(...arr);
}

const numbers = [5, 10, 2, 8, 3];
console.log(findMax(numbers));
