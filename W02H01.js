// P01

const replaceLetters = (str, arr) => {
  // let newStr = '';
  // [...str].forEach(char => newStr += arr.includes(char) ? '-': char);

  const newStr = [...str].reduce((str, char) => str + (arr.includes(char) ? '-': char));

  console.log(newStr);
}

const arr1 = ['a', 'e', 'i', 'o', 'u' ];
replaceLetters('node.js', arr1);

// P02

const sumArray = (arr) => {
  // let sum = 0;
  // arr.forEach(element => sum += isNaN(parseInt(element)) ? 0 : parseInt(element));
  
  const sum = arr.reduce((acc, e) => acc + (isNaN(parseInt(e)) ? 0 : parseInt(e)));

  console.log(sum);
}

const arr2 = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false]
sumArray(arr2)

// P03

const countingWords = (arr) => {
  let wordCount = {};
  arr.forEach(word => wordCount.hasOwnProperty(word) ? wordCount[word]++ : wordCount[word] = 1 );

  console.log(wordCount);
}

const arr3 = ['hi', 'hi', 'hello', 'world', 'hello', 'hi' , 'greetings']
countingWords(arr3);

// P04

const createAnimals = (arr) => {
  // Is this technically a const? Value is never reassigned. Props are the only thing messed with
  const animals = {};

  for (let i = 0; i < arr.length; i++) {
    animals[i] = arr[i].reduce((acc, curr) => Object.assign(acc, {[curr.property] : curr.assign}), {});
  }

  console.log(animals);
}

const arr4 =
            [
                [
                    { property: 'name', assign: 'Garfield'},
                    { property: 'owner', assign: 'Jon Arbuckle'},
                    { property: 'type', assign: 'cat' }
                ],
                [
                    { property: 'name',assign: 'Snoopy' },
                    { property: 'owner',assign: 'Charlie Brown' },
                    { property: 'type',assign: 'dog' }
                ]
            ]
createAnimals(arr4);