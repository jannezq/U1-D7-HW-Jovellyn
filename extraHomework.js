// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
let isMale = true;
let genderType = isMale ? "Male" : "Female";
console.log(genderType);


/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let numOneInt= 8;
let numTwoInt = 8;

if (numOneInt == 8){
    console.log("This value is 8")
}else{
    console.log("This value is not 8")
}

if ((numOneInt - numTwoInt) == 8){
    console.log("Number is equal");
} else {
    console.log("Number is not equal");
}


if ((numOneInt + numTwoInt) == 8){
    console.log("Number is equal");
} else {
    console.log("Number is not equal");
}



/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let stringOne = "One String"
let stringTwo = "Second String"

let allString = stringOne + stringTwo
console.log("Both strings added:", allString);



/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
let numOne = 10;
let numTwo = 34;
let numThree = 7;

if (numOne > numTwo && numOne > numThree){
    if(numTwo>numThree){
        console.log( numOne , numTwo ,numThree);
    }
    else {
        console.log( numOne , numThree , numTwo);
    }
}
else if( numTwo > numOne && numTwo > numThree)
{
    if(numOne>numThree){
        console.log(numTwo ,  numOne , numThree);
    }
    else{
        console.log(numTwo ,  numThree, numOne);
    }
}
else if( numThree > numOne && numThree > numTwo)
{
    if(numOne>numTwo){
        console.log(numThree, numOne, numTwo);
    }
    else{
        console.log(numThree, numTwo, numOne);
    }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
let intNum= 12 ;
let intNumTwo = 34;
let findAverageInt = ( intNum + intNumTwo ) / 2;

console.log(findAverageInt);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let stringWordOne = "Hello World!"
let stringWordTwo = "How are you all?!"

if(stringWordOne.length > stringWordTwo.length){
    console.log(stringWordOne , "is longer in length");
} else {
    console.log(stringWordTwo, "is longer in length");
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let givenInt= 1;
let notInteger = "Worldwide"

if (Number.isInteger(notInteger)){
    console.log("True");
} else{
    console.log("False");
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let sunscreenPrice = 43;
let discount = 40 / 100;
let discountSunscreen = sunscreenPrice * discount;
let newSunscreenPrice = sunscreenPrice - discountSunscreen;

console.log(newSunscreenPrice);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let number = 20;

if (number % 2 === 0){
    console.log("The number is an even");
} else {
    console.log("The number is an odd number");
}
