console.log("Hello world");

let namesArray = ["kyle", "gabby", "joe"]
console.log(namesArray);

// Function to sum two numbers and display the result
function sumNumbers(a, b){
    let answer = a + b // Calculate the sum of a and b
    displayResult(answer) // Call displayResult to print the sum
}

// Function to display the result
function displayResult(data){
    console.log(data) // Print the data to the console
}

// Call sumNumbers with 9 and 9 as arguments
sumNumbers(9,9) 

/*
const firstName = "Richard";
const lastName = "simmons";
console.log(`${firstName} ${lastName}`);

let counter = 10;
while (counter >= 0; counter--){
    console.log(counter)

}

var (x = 10){
    let x = 2;
}

*/
const pi = 3.14159;
console.log(pi);

let myString = `Hello
 World
 my name
 is Kyle`
 console.log(myString);
 
 console.log(`six times 5 = ${5*6}`);
 

 const createFullName = (firstname, lastName) => `${firstname} ${lastName}`;
const someFunction = (a, b) => {
    let result = " ";
    for (let i = 0; i < b; i++){
        result += a;
    }
    return result;
};

 console.log(createFullName("Tom", "Sawyer"));
 console.log(someFunction("Hello", 3));
 
/*
let username = sentHttpRequest("getUser");
console.log(username);

function logUsername(user){
    console.log(user);
    
}
sendHttpRequest("getUser", logUsername);

sendHttpRequest("getuser", user => console.log(user));
*/

function handleEvent(value) {
    console.log(value);
    
}

function handleError(err) {
    console.error(err);
    
}


doSomethingThatReturnsAPromise()
.then(handleEvent)
    
.catch(handleError);


