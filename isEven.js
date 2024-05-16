let number = process.argv[2];
function isEven() {
  if (number % 2 === 0) {
    console.log('Even')
  } else {
    console.log('Odd')
  }
};

isEven(number);