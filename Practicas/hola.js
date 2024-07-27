// const reversedWord = process.argv[2];

// function reverser(reversedWord) {
//   return reversedWord.split('').reverse().join('');
// }

// console.log(reverser(reversedWord));



if (isNaN(Number(process.argv[2]))) {
  console.log('Por favor ingresa un número');
} else {
  for (let i = 1; i <= Number(process.argv[2]); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, '- FizzBuzz');
    } else if (i % 5 === 0) {
      console.log(i, '- Buzz');
    } else if (i % 3 === 0) {
      console.log(i, '- Fizz');
    } else {
      console.log(i);
    }
  }
}




