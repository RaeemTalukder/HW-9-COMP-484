const date = new Date();


const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${month}-${day}-${year}`;

document.getElementById('dateOutput').textContent = formattedDate;

let value1 = "48";
let value2 = "300";
let value3 = "3.14";
let value4 = "hi";

let convwertedValue1 = Number(value1);
let convwertedValue2 = Number(value2);
let convwertedValue3 = Number(value3);
let convwertedValue4 = Number(value4);

let isNa1 = isNaN(convwertedValue1);
let isNa2 = isNaN(convwertedValue2);
let isNa3 = isNaN(convwertedValue3);
let isNa4 = isNaN(convwertedValue4);

let isInt1 = Number.isInteger(convwertedValue1);
let isInt2 = Number.isInteger(convwertedValue2);
let isInt3 = Number.isInteger(convwertedValue3);
let isInt4 = Number.isInteger(convwertedValue4);

document.getElementById('numberConversionOutput').innerHTML = 
"value1: " + value1 + " | converted: " + convwertedValue1 + " | isNaN: " + isNa1 + " | isInt: " + isInt1 + "<br>" +
"value2: " + value2 + " | converted: " + convwertedValue2 + " | isNaN: " + isNa2 + " | isInt: " + isInt2 + "<br>" +
"value3: " + value3 + " | converted: " + convwertedValue3 + " | isNaN: " + isNa3 + " | isInt: " + isInt3 + "<br>" +
"value4: " + value4 + " | converted: " + convwertedValue4 + " | isNaN: " + isNa4 + " | isInt: " + isInt4;


let population = 1234567890;
let formattedPopulation = population.toLocaleString();

document.getElementById('mathOutput').textContent = 
"Population: " + formattedPopulation;

function RPS() {
    let choice = document.getElementById('ConditionalInput').value
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (choice === computerChoice) {
        result = "It's a tie!";
    } else if ((choice === "rock" && computerChoice === "scissors" ||
               choice === "paper" && computerChoice === "rock" ||
               choice === "scissors" && computerChoice === "paper")) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }



     document.getElementById('ConditionalOutput').innerHTML =
        `You chose: ${choice}<br>
         Computer chose: ${computerChoice}<br>
         ${result}`;
}