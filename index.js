let rN = Math.floor(Math.random() * 100);

let n;
let chance = 0;
while (n != rN) {
  n = prompt("Hey Enter Your Number: ");
  if (n < rN) {
    alert("\n Computer number are big!\n");
  }
  else if (n > rN) {
    alert("\n Computer number are small!\n");
  }
  else {
    alert("\nYou enter the right number: ");
    console.log("The number is " + rN);
  }
  ++chance
}
console.log("Your Score is " + (100 - chance));
