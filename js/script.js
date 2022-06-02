// Question 1
//
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

var lower = requiredName.toUpperCase();

console.log(lower);


// Question 2
//

var userName = "myusername";
var minimumCharacter = 4;
var maximunCharacter = 10;


if (userName.length >= minimumCharacter && userName.length <= maximunCharacter ) {
    console.log ("Acceptable username");
}
else {

        if (userName.length < minimumCharacter) {
        console.log ("Too few characters");
        }

        if (userName.length > maximunCharacter) {
        console.log ("Too many characters");
        }
    }

// Question 3
//

var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if ((invoicePaid !== true) || (productDispatched !== true) || (customerHasSigned !== true)) {
    console.log("Order is not complete");
}

    if (invoicePaid !== true) {
        console.log("Invoice must be paid")
    }

    if (productDispatched !== true) {
            console.log("Product is not dispatched")
        }

    if (customerHasSigned !== true) {
            console.log("Customer need to sign")
        }

else {
    console.log ("pet accepted")
}
    