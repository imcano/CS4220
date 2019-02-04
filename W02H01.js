// P01

const replaceLetters = (str, arr) => {
  let newStr = '';

  [...str].forEach(char => newStr += arr.includes(char) ? '-': char);

  return newStr;
}

const arr1 = ['a', 'e', 'i', 'o', 'u' ];
replaceLetters('node.js', arr1);

// P02

const sumArray = (arr) => {
  let sum = 0;

  arr.forEach(element => sum += isNaN(parseInt(element)) ? 0 : parseInt(element));

  console.log(sum);
}

const arr2 = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false]
sumArray(arr2)

// P03



