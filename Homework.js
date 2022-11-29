/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

//------Datatypes----//
//There are 5 well known datatypes in javascript and they are known to be Primitive values, 

//First type is "Numbers"

//Numbers can be Full number which is an integer number, this mean it can be positive or negative numbers
//let's think of how many chocolate bars we have
let amountOfFullChocolates = 35;

//Numbers can also be what we can describe with decimals as "Floating number"
// Example would be were we have split chocolate into smaller pieces 
let amountOfSplitChocolates = 26.064;

//these two types of number can still be calculated with each other.
//example would be added or subtracting them to each other.
let totalChocolates = amountOfFullChocolates + amountOfSplitChocolates;
console.log("Total amount of Chocolate bars we got:", totalChocolates);

let totalEatenChocolates = amountOfFullChocolates - amountOfSplitChocolates;
console.log("Total amount of Chocolate bars we have left:", totalEatenChocolates);

//Second type is "String"
// String is a container that we store letters, numbers and symbols
// Imagine the container has a lid which is important to keep whatever inside oour container safe.
// These lids are known either as "" or ''
// We cannot close the container if the lids are not the correct shape or if there is even a lid.
// exampe ---> " Box full of chocolates ' <<<<<<--------- this won't close as the box does not have the right lid
// we must fix the right bos with the right lid which are either the "..." or '....' 

let nameOfOneChocolate = "Kinder Bueno";
let nameOfSecondChocolate = 'Hersheys';

console.log("\nChocolate bars available:", nameOfOneChocolate, nameOfSecondChocolate);

// An empty string can still be counted, example is
// "" <----- Javascript will still understand there is something there as 0
let unknownNameOfChocolate = "";
console.log("There will be no chocolate name on this line:", unknownNameOfChocolate);

// you can add strings together as if they are numbers but they won't calculate the amount of characters unless told so.
//Javascript will just combine the two strings one after the other as strings
let mixChocolates = nameOfOneChocolate + nameOfSecondChocolate
console.log("The two chocolates will be going after each other:", mixChocolates);//  <<<---------  This is known as String concatenation

// Third type is called "NULL"
// NULL is basically a way of empty what we have given.
// Imagine a box of chocolate bars is sold in a shop. 
// We then tell the people that the box is empty or sold out
// NULL is basicailly "empty"
// This is how we developers say that this is empty

let boxOfChocolateBar = null;
console.log("\nChocolate bar available:", boxOfChocolateBar);

// Fourth type is "UNDEFINED"
// NULL is something we decide as we knew the box of chocolate is empty.
// If we don't decide that the box is empty or even has any chocolate left,
// javascript will put for us "Undefined"

let boxTwoOfChocolateBar ;
console.log("There is none in box but we did not check:",boxTwoOfChocolateBar);

// Fifth type is "Boolean"
// Boolean is an expression that will give us the answer true or false.
// example would be having a coupon for getting chocolates.
// If you have a coupon for the chocolates, you can get free chocolates
// if you don't have the correct coupon, you won't get the free chocolate

let chocolateCoupon = true;
let drinkCoupon = false;

console.log("\nI have a coupon for chocolate, will I get chocolate?:", chocolateCoupon);
console.log("I have my Drinks coupon, will I get chocolates?", drinkCoupon);



/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

// A variable is what we can consider the container of the value that we are inputing.
// -The container has a unique name 
// -throughout the whole coding process, it can be used as many times is different operations.
// -The value in the container can change depending on the conditions it goes through
// That is what a variable is


/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let numTwelve = 12;
let numTwenty = 20;

let numAdditionTotal= numTwelve + numTwenty;
console.log("The total sum of", numTwelve, "+", numTwenty, "=", numAdditionTotal);


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

//variable X
let variableX = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let nameOfPerson = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
