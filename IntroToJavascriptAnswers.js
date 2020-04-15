/*
 * Programming Quiz: Semicolons! (2-8)
 */

var thingOne = "red";

var thingTwo = "blue";

console.log(thingOne + " " + thingTwo);

/*
 * Programming Quiz: Out to Dinner (2-10)
 */

var bill = 10.25 + 3.99 + 7.15;

var tip = bill * 0.15;

var total = bill + tip;

console.log(total.toFixed(2));

/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage =
  "Hi, my name is" +
  " " +
  firstName +
  "." +
  " " +
  "I love" +
  " " +
  interest +
  "." +
  " " +
  "In my spare time, I like to" +
  " " +
  hobby +
  ".";

console.log(awesomeMessage);

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = -1;

if (musicians <= 0) {
  groupType = "not a group";
} else if (musicians === 1) {
  groupType = "solo";
} else if (musicians === 2) {
  groupType = "duet";
} else if (musicians === 3) {
  groupType = "trio";
} else if (musicians === 4) {
  groupType = "quartet";
} else {
  groupType = "this is a large group";
}

console.log(groupType);

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 12;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
  weapon = "knife";
  solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  weapon = "pool stick";
  solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  weapon = "trophy";
  solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
}

var solvedOutputMessage =
  suspect +
  " " +
  "did it in the" +
  " " +
  room +
  " " +
  "with the" +
  " " +
  weapon +
  "!";

if (solved) {
  console.log(solvedOutputMessage);
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.0;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
} else if (isActive === true && balance > 0) {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (!isActive) {
  console.log("Your account is no longer active.");
} else if (balance === 0) {
  console.log("Your account is empty.");
} else if (balance < 0) {
  console.log("Your balance is negative. Please contact bank.");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

var iceCreamOrder =
  "I'd like two scropes of" +
  " " +
  flavor +
  " " +
  "ice cream in a" +
  " " +
  vessel +
  " " +
  "with" +
  " " +
  toppings +
  ".";

// Add your code here
if (
  (flavor === "vanilla" || flavor === "chocolate") &&
  (vessel === "cone" || vessel === "bowl") &&
  (toppings === "sprinkles" || toppings === "peanuts")
) {
  console.log(iceCreamOrder);
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Write your if/else code here

if (shirtWidth < 20 && shirtLength < 29 && shirtSleeve < 8.38) {
  console.log("S");
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  (shirtLength >= 29 && shirtLength < 30) &&
  (shirtSleeve >= 8.38 && shirtSleeve < 8.63)
) {
  console.log("M");
} else if (
  shirtWidth >= 22 &&
  shirtWidth < 24 &&
  (shirtLength >= 30 && shirtLength < 31) &&
  (shirtSleeve >= 8.63 && shirtSleeve < 8.88)
) {
  console.log("L");
} else if (
  shirtWidth >= 24 &&
  shirtWidth < 26 &&
  (shirtLength >= 31 && shirtLength < 33) &&
  (shirtSleeve >= 8.88 && shirtSleeve < 9.63)
) {
  console.log("XL");
} else if (
  shirtWidth >= 26 &&
  shirtWidth < 28 &&
  (shirtLength >= 33 && shirtLength < 34) &&
  (shirtSleeve >= 9.63 && shirtSleeve < 10.13)
) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("N/A");
}

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category =
  eatsPlants && eatsAnimals
    ? "omnivore"
    : eatsAnimals
    ? "carnivore"
    : eatsPlants
    ? "herbivore"
    : undefined;

console.log(category);

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = "a high school diploma";

// set the value of this based on a person's education
var salary = 0;

// your code goes here

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}

var averageSaleryStatement =
  "In 2015, a person with" +
  " " +
  education +
  " " +
  "earned an average of" +
  " " +
  "$" +
  salary.toLocaleString("en-US") +
  "/year.";

console.log(averageSaleryStatement);

/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x >= 1 && x <= 20) {
  var divisibleBy3 = x % 3 === 0;
  var divisibleBy5 = x % 5 === 0;

  var printJuliaJames =
    divisibleBy3 && divisibleBy5
      ? "JuliaJames"
      : divisibleBy3
      ? "Julia"
      : divisibleBy5
      ? "James"
      : x;

  console.log(printJuliaJames);

  x = x + 1;
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
  var numDecrementby1 = num > 0 ? num - 1 : num;

  var isBottles = num > 1 || num === 0 ? "bottles" : "bottle";

  var isBottle = numDecrementby1 === 1 ? "bottle" : "bottles";

  // Segment One Print Out: "[number of bottles] of juice on the wall"

  var segmentOne = num + " " + isBottles + " " + "of juice on the wall!";

  // Segment Two Print Out: "[number of bottles] of juice!"

  var segmentTwo = num + " " + isBottles + " " + "of juice!";

  // Segment Three Print Out: "Take one down, pass it around... [number of bottles - 1] of juice on the wall"

  var segmentThree =
    "Take one down, pass it around..." +
    " " +
    numDecrementby1 +
    " " +
    isBottle +
    " " +
    "of juice on the wall!";

  var lyrics = segmentOne + " " + segmentTwo + " " + segmentThree;

  console.log(lyrics);

  num = num - 1;
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var countdown = 60;

while (countdown >= 0 && countdown <= 60) {
  var printCountdown =
    countdown === 50
      ? "Orbiter transfers from ground to internal power"
      : countdown === 31
      ? "Ground launch sequencer is go for auto sequence start"
      : countdown === 16
      ? "Activate launch pad sound suppression system"
      : countdown === 10
      ? "Activate main engine hydrogen burnoff system"
      : countdown === 6
      ? "Main engine start"
      : countdown === 0
      ? "Solid rocket booster ignition and liftoff!"
      : "T-" + countdown + " " + "seconds";

  console.log(printCountdown);

  countdown = countdown - 1;
}

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

let solution = 1;

for (var i = 1; i <= 12; ++i) {
  solution *= i;
}

console.log(solution);

/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

for (var row = 0; row <= 25; ++row) {
  for (var seat = 0; seat <= 99; ++seat) {
    console.log(row + "-" + seat);
  }
}

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num) {
  var stringLaugh = "";
  for (var i = 0; i < num; i++) {
    stringLaugh += "ha";
  }
  return stringLaugh + "!";
}
console.log(laugh(3));

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(num) {
  var buildtriangle = "";
  for (var i = 1; i <= num; i++) {
    var make = makeLine(i);
    buildtriangle += make;
  }
  return buildtriangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function laugh(num) {
  var stringLaugh = "";
  for (var i = 0; i < num; i++) {
    stringLaugh += "ha";
  }
  return stringLaugh + "!";
});

var x = 1;

while (x >= 1 && x <= 20) {
  var divisibleBy3 = x % 3 === 0;
  var divisibleBy5 = x % 5 === 0;

  var printJuliaJames =
    divisibleBy3 && divisibleBy5
      ? "JuliaJames"
      : divisibleBy3
      ? "Julia"
      : divisibleBy5
      ? "James"
      : x;

  console.log(printJuliaJames);

  x = x + 1;
}

var test = [
  12,
  929,
  11,
  3,
  199,
  1000,
  7,
  1,
  24,
  37,
  4,
  19,
  300,
  3775,
  299,
  36,
  209,
  148,
  169,
  299,
  6,
  109,
  20,
  58,
  139,
  59,
  3,
  1,
  139
];

// Write your code here
test.forEach(function(num, index, array) {
  var divisibleBy3 = num % 3 === 0;
  if (divisibleBy3) {
    array[index] = num += 100;
  }
});

console.log(test);

var bills = [
  50.23,
  19.12,
  34.01,
  100.11,
  12.15,
  9.9,
  29.11,
  12.99,
  10.0,
  99.22,
  102.2,
  100.1,
  6.77,
  2.22
];

var totals = bills.map(function(bill) {
  var tip = bill * 0.15;
  bill += tip;
  return Number(bill.toFixed(2));
});

console.log(totals);

/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var r = 0; r < numbers.length; r++) {
  for (var c = 0; c < numbers[r].length; c++) {
    if (numbers[r][c] % 2 === 0) {
      numbers[r][c] = "even";
      console.log(numbers[r][c]);
    } else {
      numbers[r][c] = "odd";
      console.log(numbers[r][c]);
    }
  }
}
console.log(numbers);
