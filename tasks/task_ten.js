
console.log("This is a log message."); 
    
const x = 5;
const y = 3;
const sum = x + y;
console.log("The sum is:", sum); 

const age = 15;
if (age < 18) {
  console.warn("This content may not be suitable for users under 18.");
}


const divide = (a, b) => {
  if (b === 0) {
    console.error("Error: Division by zero is not allowed.");
  } else {
    return a / b;
  }
};

console.log(divide(10, 2)); 
console.log(divide(10, 0)); 