// QUESTION 1
/* You order a t-shirt for $10, socks for $8 and a dinner plate for $10 
as part of your birthday present to you friend. Write a javascript code to compute the total  amount you
spent on the birthday present */


//ANSWER
let tshirtPrice = 10;
let socksPrice = 8;
let dinnerPlatePrice = 20;
 

let totalCost = tShirtPrice + socksPrice + dinnerPlatePrice;
console.log("Total cost of the items ordered: $" + totalCost);

// The answer is = $38


//QUESTION 2
/* At a restaurant juma ordered 1 soup for $10, 3 burgers for $8 each and one icecream for $5. 
Calculate juma's total order cost */

let soupPrice = 10;
let burgerPrice = 8*3;
let iceCreamPrice = 5;

let totalPrice = soupPrice + burgerPrice + iceCreamPrice;

console.log("Total price of items orderd : $" + totalPrice);


//QUESTION 3
/* Calculate the total amount that jane spent on toaster which costs $18.50 and shirtd @$7.50 */
let toasterPrice = 18.50;
 
let shirtPrice = 7.50*2;

let janePrice = toasterPrice + shirtPrice;

console.log("The total purchases are: $" + janePrice);


//Calculating the prices of product and trying to reduce error rate using Math.round function

let toasterCost = 1899;
let basketballCost = 2095;
let tshirtCost= 799;


let totalPay = toasterCost + basketCost + tshirtCost ;

console.log("Total amount payable excluding the taxes is: $" + Math.round(totalPay)/100);


//STRING CONCATENATION- This is the process of combiniing two sets of strings.
console.log("Juma" + "Programming in Javascript");

//Type of is a javascript funcction that is used to identify a data type in javasript
typeof 4;  // returns a number

const a =23;
const b = 34;

const addNumbers = () => {
    return a + b;
}
console.log(addNumbers());