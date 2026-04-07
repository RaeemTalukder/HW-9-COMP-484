const date = new Date();

// Uses objects to get full year to display full year
//get month to display month with 2 spaces
//get date to dislay date in 2 spaces

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${month}-${day}-${year}`;
//output
document.getElementById('dateOutput').textContent = formattedDate;
//test values
let value1 = "48";
let value2 = "300";
let value3 = "3.14";
let value4 = "hi";
//converts numbers, if not appicable it is NaN
let convwertedValue1 = Number(value1);
let convwertedValue2 = Number(value2);
let convwertedValue3 = Number(value3);
let convwertedValue4 = Number(value4);
//if it is a string
let isNa1 = isNaN(convwertedValue1);
let isNa2 = isNaN(convwertedValue2);
let isNa3 = isNaN(convwertedValue3);
let isNa4 = isNaN(convwertedValue4);
//if it is a whole number
let isInt1 = Number.isInteger(convwertedValue1);
let isInt2 = Number.isInteger(convwertedValue2);
let isInt3 = Number.isInteger(convwertedValue3);
let isInt4 = Number.isInteger(convwertedValue4);
//display everything
document.getElementById('numberConversionOutput').innerHTML = 
"value1: " + value1 + " | converted: " + convwertedValue1 + " | isNaN: " + isNa1 + " | isInt: " + isInt1 + "<br>" +
"value2: " + value2 + " | converted: " + convwertedValue2 + " | isNaN: " + isNa2 + " | isInt: " + isInt2 + "<br>" +
"value3: " + value3 + " | converted: " + convwertedValue3 + " | isNaN: " + isNa3 + " | isInt: " + isInt3 + "<br>" +
"value4: " + value4 + " | converted: " + convwertedValue4 + " | isNaN: " + isNa4 + " | isInt: " + isInt4;

//locale string to display them with commas, to expolenetial to display with ^2 exponential notation
let population = 1234567890;
let populationInExponential = population.toExponential(2);
let formattedPopulation = population.toLocaleString();
//Display
document.getElementById('mathOutput').textContent = 
"Population: " + formattedPopulation + "<br>" + " Population in exponential notation: " + populationInExponential;

function RPS() {
    //get user input
    let choice = document.getElementById('ConditionalInput').value
    //options
    let choices = ["rock", "paper", "scissors"];
    //math.random to round down chosen number, math.random to choose random number
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    //if user and compuer choices are same, time, if user wins say user wins, if user loses say computer wins
    if (choice === computerChoice) {
        result = "It's a tie!";
    } else if ((choice === "rock" && computerChoice === "scissors" ||
               choice === "paper" && computerChoice === "rock" ||
               choice === "scissors" && computerChoice === "paper")) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }


//display results
     document.getElementById('ConditionalOutput').innerHTML =
        `You chose: ${choice}<br>
         Computer chose: ${computerChoice}<br>
         ${result}`;
}
