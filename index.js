//declare variable in global scope called customerName using var
//expected undefined to equal 'bob'
 var customerName = 'bob';
 //upperCaseCustomerName() function that accesses that global customerName variable, and uppercases it.
 //modifies the customerName variable
  function upperCaseCustomerName(){
     customerName= customerName.toUpperCase()
  }
/*setBestCustomer() Write a function that when called, declares a variable called bestCustomer in global scope
assigns it to be 'not bob'
*/
function setBestCustomer(){
    bestCustomer = 'not bob'
}

/*
overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.
 overwriteBestCustomer('maybe bob');
*/
 function overwriteBestCustomer(){
     bestCustomer = 'maybe bob';
 }

 /*
 leastFavoriteCustomer and changeLeastFavoriteCustomer():declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value. Finally, write a function called changeLeastFavoriteCustomer()
 should unsuccessfully try to reassign the least favorite customer
 */
const leastFavoriteCustomer = 'name';

function changeLeastFavoriteCustomer(){
     leastFavoriteCustomer = 'maybe bob';
}