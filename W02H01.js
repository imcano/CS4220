const replaceLetters = (str, arr) => {
  let newStr = '';

  [...str].forEach(char => newStr += arr.includes(char) ? '-': char);

  console.log(newStr);
}

const arr = ['a', 'e', 'i', 'o', 'u' ];
replaceLetters('node.js', arr);

const sumArray = (arr) => {
  
}
