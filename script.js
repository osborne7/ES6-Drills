// pt 1: template literals and default values:

// let favMovie = function(name = 'world', movie = 'The Room') {
//     console.log(`Hello ${name}, my favorite movie is ${movie}.`);
// };

// favMovie('Nellie', 'Silver Linings Playbook');





// pt 2: arrow functions:

// let favMovie = (name = 'world', movie = 'The Room') => console.log(`Hello ${name}, my favorite movie is ${movie}.`);

// favMovie('Nellie', 'Silver Linings Playbook');

// let getFirstName = name => {
//     let firstName = name.split(' ');
//     console.log(firstName[0]);
// };

// getFirstName('Nellie Osborne');



// let returnObject = (x, y) => {
//     return {exponent: x**y,
//             product: x*y}; 
// };

// returnObject(5, 5);






// pt 3: spread syntax:

let favs = (name, location, favFood) => {
    console.log(`Name: ${name}, location: ${location}, favorite food: ${favFood}`);
}

let arr = ['James', 'Boston', 'broccoli'];

favs(...arr);


let myName = 'Nellie';

let myFunc = string => {
    let stringToArray = [...string];
    
    for (let i = 0; i < stringToArray.length; i++) {
        console.log(stringToArray[i]);
    }

};

myFunc(myName);



