// Write your solution here!
// index.js

// Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the cats array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the cats array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the cats array destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the cats array and return a new array without modifying the original array
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to the cats array and return a new array without modifying the original array
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from the cats array and return a new array without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat from the cats array and return a new array without modifying the original array
function removeFirstCat() {
  return cats.slice(1);
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
