const userInput = process.argv[2];

function fizzBuzz(userInput) {

if (isNaN(userInput)) {
  console.log('Argumento invalido');
  // process.exit();
}
for (i = 0; i <= userInput; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, ' - FizzBuzz')
  } else if (i % 5 === 0) {
    console.log(i, ' - Buzz')
  } else if (i % 3 === 0) {
    console.log(i, ' - Fizz')
  } else {
    console.log(i)
  }
}
}

fizzBuzz(userInput);